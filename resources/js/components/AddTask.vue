<template>
    <div>
        <h4 class="text-center">Add task</h4>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addtask">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="task.name">
                    </div><br>
                    <div class="form-group">
                        <label>Created By</label>
                        <input type="text" class="form-control" v-model="task.author">
                    </div><br>
                    <button type="submit" class="btn btn-primary">Add task</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            task: {}
        }
    },
    methods: {
        addtask() {
            this.$axios.get('/sanctum/csrf-cookie').then(response => {
                this.$axios.post('/api/tasks/add', this.task)
                    .then(response => {
                        this.$router.push({name: 'tasks'})
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        }
    },
    beforeRouteEnter(to, from, next) {
        if (!window.Laravel.isLoggedin) {
            window.location.href = "/";
        }
        next();
    }
}
</script>

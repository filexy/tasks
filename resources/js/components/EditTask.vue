<template>
    <div>
        <h4 class="text-center">Edit Task</h4>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updatetask">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="task.name">
                    </div><br>
                    <div class="form-group">
                        <label>Created By</label>
                        <input type="text" class="form-control" v-model="task.created_by">
                    </div><br>
                    <button type="submit" class="btn btn-primary">Update task</button>
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
    created() {
        this.$axios.get('/sanctum/csrf-cookie').then(response => {
            this.$axios.get(`/api/tasks/edit/${this.$route.params.id}`)
                .then(response => {
                    this.task = response.data;
                })
                .catch(function (error) {
                    console.error(error);
                });
        })
    },
    methods: {
        updatetask() {
            this.$axios.get('/sanctum/csrf-cookie').then(response => {
                this.$axios.post(`/api/tasks/update/${this.$route.params.id}`, this.task)
                    .then(response => {
                        this.$router.push({name: 'tasks'});
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

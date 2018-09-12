<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div id="ui">
                    <form class="form-group">
                        <div class="row">
                            <div class="col-lg-6">
                                <label>First Name:</label>
                                <input type="text" name="username" class="form-control">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:['session'],
    data () {
        return {
        }
    }
}
</script>

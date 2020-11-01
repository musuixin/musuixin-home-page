<template>
    <el-collapse-transition>
        <div v-show="isShow">
            {{hours}}:{{minutes}}:{{seconds}}

        </div>

    </el-collapse-transition>
</template>

<script>
    export default {
        name: "Time",
        created() {
            setInterval(() => {
                var date = new Date();
                this.h = date.getHours();
                this.min = date.getMinutes();
                this.sec = date.getSeconds();
                this.isShow = true
            }, 1000)

        },
        computed: {
            minutes: function () {
                if (this.min < 10) {
                    return '0' + this.min
                }
                return this.min
            },
            seconds: function () {
                if (this.sec + 1 < 10) {
                    return '0' + this.sec
                }
                return this.sec
            },
            hours: function () {
                if (this.h < 10) {
                    return '0' + this.h
                }
                return this.h
            }
        },
        data() {
            return {
                isShow: false,
                h: '',
                min: '',
                sec: ''
            }
        }
    }
</script>

<style scoped>
    div {
        padding-top: 10px;
        font-size: 32px;
        color: white;
        font-family: "Microsoft Yahei Light", "Microsoft Yahei", PingFangSC-Regular, Helvetica, sans-serif, "等线";
    }
</style>

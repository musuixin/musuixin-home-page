<template>
    <div id="app" ref="app" :style="'width'+':'+width+'px'">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="3">
                        <Time/>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-row>
                    <el-col :offset="6" :span="12">
                        <Search/>
                    </el-col>
                    <el-col :offset="2" :span="20">
                        <Favorite/>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer style="position:absolute;bottom: 10px;color: white;width: 100%">
                作者QQ | 1804125652
            </el-footer>
        </el-container>
    </div>
</template>


<style lang="scss">
    body {
        margin: 0px;
        padding: 0px;
    }

    #app {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        text-align: center;
        background-image: url("assets/bg.png");
        transition: width 1s;
    }
</style>
<script>
    import Time from "@/views/Time";
    import Search from "@/views/Search";
    import Favorite from "@/views/Favorite";

    export default {
        components: {Favorite, Search, Time},
        mounted() {
            // if (document.documentElement.clientWidth <1862) {
            //     this.width=1862
            // }
            // window.onresize = () => {
            //     this.width = document.documentElement.clientWidth
            // }
        },
        watch: {
            // width: function (value, old) {
            //     alert(value)
            // }
        },
        data() {
            return {
                width: document.documentElement.clientWidth
            }
        }
    }
</script>

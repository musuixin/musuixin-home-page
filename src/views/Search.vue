<template>
    <transition name="el-zoom-in-center">
        <div v-show="isShow">
            <el-row>
                <el-col :offset="15" :span="8">
                    <el-radio-group v-model="radio">
                        <el-radio label="1" style="color: white">谷歌</el-radio>
                        <el-radio label="2" style="color: white">百度</el-radio>
                    </el-radio-group>
                </el-col>
            </el-row>
            <h2>随心起始页</h2>
            <el-autocomplete
                    ref="frame"
                    :style="'width:'+side+';transition:width 2s;'"
                    class="inline-input"
                    v-model="content"
                    :fetch-suggestions="querySearch"
                    :trigger-on-focus="false"
                    @select="handleSelect"
                    @mouseenter.native="toMax"
                    @mouseleave.native="toMin"
                    @keydown.native.enter="toPage"
                    :autofocus="true"
            >
                <template slot-scope="{ item }">
                    <div>{{ item.q }}</div>
                </template>
                <el-button slot="append" @click="toPage()">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="icon"/>
                    </svg>
                </el-button>
            </el-autocomplete>
        </div>
    </transition>
</template>

<script>
    import axios from 'axios'
    // 在这里可以直接设置默认api，转为代理
    export default {
        name: "Search",
        data() {
            return {
                radio: '2',
                content: "",
                isShow: false,
                side: '70%',
                icon: '#icon-baidu'
            }
        },
        watch: {
            radio: function (newQuestion, oldQuestion) {
                switch (newQuestion) {
                    case '1':
                        this.icon = '#icon-google';
                        break;
                    case '2':
                        this.icon = '#icon-baidu'
                        break;
                }
            }
        },
        mounted() {
            this.isShow = true;
            console.log(this.$refs.frame);
        },
        methods: {
            toMax() {
                this.side = '100%'
            },
            toMin() {
                this.side = '70%'
            },
            baiduSearch(queryString, cb) {
                axios.get("/baidu/sugrec", {
                    params: {
                        wd: this.content,
                        pre: 1,
                        p: 3,
                        ie: 'utf-8',
                        json: 1,
                        prod: 'pc'
                    }
                }).then((response) => {
                    cb(response.data.g);
                })
            },
            toPage() {
                switch (this.radio) {
                    case '2':
                        window.open("https://www.baidu.com/s?wd=" + this.content, '_blank');
                        break;
                    case '1':
                        window.open(" https://www.google.com/search?q=" + this.content, '_blank');
                        break;
                }
            },
            querySearch(queryString, cb) {
                this.baiduSearch(queryString, cb)

            },
            handleSelect(item) {
                this.content = item.q
            }
        }
    }
</script>

<style scoped>
    .inline-input {
        width: 100%;
    }

    h2 {
        font-family: "Microsoft YaHei";
        color: white;
    }

    .icon {
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>

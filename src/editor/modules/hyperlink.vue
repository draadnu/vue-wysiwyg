<template>
    <form @submit.prevent="insertLink">
        <div style="position: relative; float: left; width: 40%;" @click="clickUrl">
            <label for="url">URL</label>
            <input ref="url" id="url" type="text" style="width: 70%" v-model="url" autocomplete="false">
        </div>
        <div style="position: relative; float: left; width: 40%;" @click="clickText">
            <label for="text">Link Title</label>
            <input ref="text" type="text" id="text" style="width: 70%" v-model="title" autocomplete="false">
        </div>

        <button type="submit" style="float: left; width: 20%;position: relative; top: 2px;">Insert</button>
    </form>

</template>

<script>
import bus from 'src/editor/bus.js';

export default {
    title: "link",
    icon: '<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/></svg>',
    description: "Hyperlink",
    props: {
      uid: null
    },

    data(){
        return {
            url: "",
            title: "",
        }
    },
    methods: {
        insertLink(){
            this.$emit("exec", "insertHTML", `<a href='${this.url}'>${this.title}</a>`);
            this.$parent.closeDashboard();
            this.url = "";
            this.title = "";
        },

        clickUrl() {
            this.$nextTick(() => {
                this.$refs.url.focus();
            });
        },

        clickText() {
            this.$nextTick(() => {
                this.$refs.text.focus();
            });
        }
    },

    created () {
        bus.on(this.uid + "_show_dashboard_link", () => {
            this.$nextTick(() => {
                let sel = bus.utils.getHTMLOfSelection();
                this.title = sel;
                this.$refs.url.focus();
            });
        });

    }
};
</script>


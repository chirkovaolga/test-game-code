<template>
    <div class="game">
        <button class="button" ref="button" @click="btnClick" :class="color"></button>
    </div>
</template>

<script>
export default {
    props: ['color', 'index', 'game'],
    data() {
        return {
            audio: null
        }
    },
    created() {
        this.audio = new Audio(`@/assets/audio/${this.color}.mp3`);
    },
    methods: {
        play() {
            this.audio.play();
            this.$refs.button.classList.add("active");
            setTimeout(() => {
                this.$refs.button.classList.remove("active");
            }, 300);
        },
        btnClick() {
            if (this.game) {
                this.play();
                this.$emit("click", this.index);
            }
        }
    }
}

</script>

<style scoped>
.button {
    width: 100px;
    height: 100px;
    border: none;
}

.button:focus,
.button:hover {
    outline: none;
}

.blue {
    background-color: #6b58e8;
}

.blue.active {
    background-color: #442ce5;
}

.red {
    background-color: #e85873;
}

.red.active {
    background-color: #e81c41;
}

.green {
    background-color: #33e866;
}

.green.active {
    background-color: #0acf42;
}

.yellow {
    background-color: #edf059;
}

.yellow.active {
    background-color: #e2e50e;
}
</style>

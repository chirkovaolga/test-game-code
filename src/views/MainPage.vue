<template>
    <div class="container">
        <div class="box-first">
            <BaseSimon v-for="(color, index) in btnColors" ref="button" :key="index" :color="color" :index="index"
                :game="!!round && playerTurn" @click="btnClick(index)" />
        </div>

        <div class="box-second">
            <div class="info">
                <h2 class="title-2">Round: {{ round }}</h2>
                <button class="start-button" v-if="!round" @click="start">
                    {{ gameEnd ? 'Попробуйте снова' : 'Старт' }}
                </button>
            </div>

            <BaseOptions v-model.number="level" :difficultLevels="difficultLevels" />
        </div>

    </div>
</template>

<script>
import BaseSimon from '../components/BaseSimon.vue';
import BaseOptions from '../components/BaseOptions.vue';

export default {
    components: { BaseSimon, BaseOptions },
    data() {
        return {
            btnColors: ['blue', 'red', 'green', 'yellow'],
            level: 0,
            round: 0,
            position: 0,
            chain: [],

            difficultLevels: [
                {
                    name: 'easy',
                    interval: 1500,
                },
                {
                    name: 'medium',
                    interval: 1000,
                },
                {
                    name: 'hard',
                    interval: 400,
                },
            ],
            playerTurn: false,
            gameEnd: false,
        }
    },
    computed: {
        interval() {
            return this.level
        }
    },
    methods: {
        btnClick(index) {
            if (this.round) {
                if (index === this.chain[this.position]) {
                    this.position === this.round - 1
                        ? this.generateLevel()
                        : (this.position += 1);
                } else {
                    this.endgame = true;
                    this.round = 0;
                }
            }
        },
        async generateLevel() {
            if (this.round) await this.sleep(1000);
            this.playerTurn = false;
            this.round += 1;
            this.position = 0;
            const value = Math.round(Math.random() * 3);
            this.chain.push(value);

            for (let [index, value] of this.chain.entries()) {
                this.$refs.button[value].play();
                if (index !== this.chain.length - 1) {
                    await this.sleep(this.interval);
                }
            }
            this.playerTurn = true;
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        reset() {
            this.round = 0;
            this.endgame = false;
            this.chain = [];
        },
        start() {
            this.reset();
            this.generateLevel();
        }
    }
}
</script>

<style scoped>
.container {
    margin: 0 auto;
    width: 600px;
}

.box-first {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.box-second {
    display: flex;
    justify-content: space-around;
}

.title-2 {
    margin: 0;
    margin-bottom: 5px;
}

.start-button {
    padding: 5px 10px;
}
</style>
<template>
    <div class="options">
        <h2 class="title-2">Game options:</h2>
        <form>
            <div v-for="level in difficultLevels" :key="level.interval">
                <input type="radio" :id="level.name" name="level" :value="level.interval" @input="updateLevel" />
                <label :for="level.name">{{ level.name }}</label>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: ['difficultLevels'],
    methods: {
        updateLevel() {
            this.$emit("input", event.target.value);
        }
    }
}
</script>

<style scoped>
.title-2 {
    margin: 0;
    margin-bottom: 5px;
}
</style>
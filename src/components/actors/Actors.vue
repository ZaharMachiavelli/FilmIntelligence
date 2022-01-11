<template>
<div class="chooseactor" v-if="$store.state.sysState==workState">
    <h1>Введите желаемых актеров</h1>
    <div class="add">
    <input type="text" v-model="current" />
    <button @click="addActor">✔</button>
    </div>
    <div v-for="(actor, index) in actors" :key="index" style="margin-bottom: 10px;">
        <Actor :name="actor" @deleteActor="removeActor" />
    </div>
    <my-button @click="$store.state.sysState=workState+1">Завершить</my-button>
</div>


</template>

<script>
import Actor from "@/components/actors/Actor"
export default ({
    components: {Actor},
    props: {
        actors: Array[String],
        workState: Number
    },
    data() {
        return {
            current: ""
        }
        
    },
    methods: {
        addActor() {
            console.log("2")
            this.$emit('addNew', this.current);
            this.current = "";
        },

        removeActor(value) {
            this.$emit('deleteActor', value);
        }
    }
})
</script>

<style scoped>
.chooseactor {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.add {
    position: relative;
    width: fit-content;
}

input {
    width: 500px;
    padding: 10px 35px 10px 20px;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 15px;
}

.add button {
    position: absolute;
    right: 1%;
    top:0;
}

button {
    color: green;
    background: transparent;
    text-decoration: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

</style>

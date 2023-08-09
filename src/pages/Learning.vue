<script setup>
import AppLayout from '../components/AppLayout.vue'
import { useRootStore } from '../stores/root';
import { storeToRefs } from 'pinia';

const rootStore = useRootStore();
const { questions, activeQuestion } = storeToRefs(rootStore);

function addQuestions(item){
    rootStore.addQuestions(item);
}

</script>

<template>
    <AppLayout>
		<div class="main-wrapper">
			<div class="app-bar back">
                <router-link to="/" class="btn-back"><img src="../assets/images/arrow-left.svg" alt=""></router-link>
				<div class="app-bar-title">
                    Learning
                </div>				
			</div>	
            <div class="app-header">
                Tests
            </div>
            <div class="app-questions">
                <div 
                    v-for="item in questions" 
                    :key="item.id" 
                    :class="((activeQuestion.includes(item.id)) ? 'active' : '')"
                    @click="addQuestions(item.id)"
                >
                    {{ item.id }}
                </div>
            </div>
		</div>        
    </AppLayout>
</template>

<style scoped>

</style>
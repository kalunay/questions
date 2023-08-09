<script setup>
import AppLayout from '../components/AppLayout.vue'
import { useRootStore } from '../stores/root';
import { storeToRefs } from 'pinia';

const rootStore = useRootStore();
const { questions, activeQuestion, width } = storeToRefs(rootStore);

</script>

<template>
    <AppLayout>
        <div class="main-wrapper">
			<div class="app-bar">
				<div class="app-bar-title">Ray Driving Theory</div>
				<div class="app-bar-icons">
					<span>
						<img src="../assets/images/crown.svg">
					</span>
					<span>
						<img src="../assets/images/fire.svg"> 13
					</span>
				</div>
			</div>	
			<div class="top-bar">
				<div class="top-bar-body">
					<div class="top-bar-body-icon">
						<img src="../assets/images/icon-01.svg">
					</div>
					<div class="top-bar-body-text">
						Learning
						<span>Category В</span>
					</div>
                    <router-link to="/learning"><img src="../assets/images/chevron-circle-right.svg"></router-link>
				</div>
				<div class="top-bar-info">{{ activeQuestion.length }} questions out of {{ questions.length }} passed</div>
				<div class="top-bar-bar">
					<div class="top-bar-statusbar">
						<div>&nbsp;</div>
						<div>&nbsp;</div>
						<div>&nbsp;</div>
						<div>&nbsp;</div>
						<div>&nbsp;</div>
						<div>&nbsp;</div>
						<div>&nbsp;</div>
					</div>

					<div class="fill" v-bind:style="{width: width + '%'}">
						<div class="top-bar-statusbar">
							<div>&nbsp;</div>
							<div>&nbsp;</div>
							<div>&nbsp;</div>
							<div>&nbsp;</div>
							<div>&nbsp;</div>
							<div>&nbsp;</div>
							<div>&nbsp;</div>
						</div>
					</div>
				</div>
			</div>

			<div class="wrapper-cards">
				<div class="card">
					<div class="card-icon">
						<img src="../assets/images/icon-02.svg">
					</div>
					<div class="card-name">DVSA Exam</div>
				</div>
				<div class="card">
					<div class="card-icon">
						<img src="../assets/images/icon-03.svg">
					</div>
					<div class="card-name">Express mode</div>
				</div>
				<div class="card">
					<div class="card-icon">
						<img src="../assets/images/icon-04.svg">
					</div>
					<div class="card-name">Hazard perception</div>
				</div>
				<div class="card">
					<div class="card-icon">
						<img src="../assets/images/icon-05.svg">
					</div>
					<div class="card-name">Road signs</div>
				</div>
				<div class="card">
					<div class="card-icon">
						<img src="../assets/images/icon-06.svg">
					</div>
					<div class="card-name">Multiplayer Learning</div>
				</div>
			</div>

			<ul class="icons">
				<li>
					<img src="../assets/images/icon-07.svg">
					<span>Mistakes</span>
				</li>
				<li>
					<img src="../assets/images/icon-08.svg">
					<span>Statistics</span>
				</li>
				<li>
					<img src="../assets/images/icon-09.svg">
					<span>Highway Code</span>
				</li>
				<li>
					<img src="../assets/images/icon-10.svg">
					<span>Favorites</span>
				</li>			
			</ul>
		</div>
		<div class="bottom-bar">
			<ul class="nav-menu">
				<li class="active">
					<div class="icon">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M15 18H11.8C11.634 18 11.5 17.866 11.5 17.7V13.5C11.5 12.119 10.381 11 9 11C7.619 11 6.5 12.119 6.5 13.5V17.7C6.5 17.866 6.36595 18 6.19995 18H3C1 18 0 17 0 15V8.65102C0 6.65302 0.523054 6.34608 1.43005 5.58608L7.39404 0.584982C8.32304 -0.194018 9.67806 -0.194018 10.6071 0.584982L16.571 5.58608C17.477 6.34608 18.001 6.65302 18.001 8.65102V15C18 17 17 18 15 18Z" fill="#FF7355"/>
						</svg>
					</div>
					<span>Home</span>
				</li>
				<li>
					<div class="icon">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10 16.75H8C5.932 16.75 4.25 15.068 4.25 13C4.25 10.932 5.932 9.25 8 9.25H12C13.241 9.25 14.25 8.241 14.25 7C14.25 5.759 13.241 4.75 12 4.75H10C9.586 4.75 9.25 4.414 9.25 4C9.25 3.586 9.586 3.25 10 3.25H12C14.068 3.25 15.75 4.932 15.75 7C15.75 9.068 14.068 10.75 12 10.75H8C6.759 10.75 5.75 11.759 5.75 13C5.75 14.241 6.759 15.25 8 15.25H10C10.414 15.25 10.75 15.586 10.75 16C10.75 16.414 10.414 16.75 10 16.75ZM7.5 4C7.5 6.037 5.67998 7.23891 4.47498 8.03491L4.27698 8.16602C4.19298 8.22202 4.096 8.25 4 8.25C3.904 8.25 3.80702 8.22202 3.72302 8.16602L3.52502 8.03491C2.32002 7.23891 0.5 6.037 0.5 4C0.5 2.07 2.07 0.5 4 0.5C5.93 0.5 7.5 2.07 7.5 4ZM5.02002 4C5.02002 3.448 4.57202 3 4.02002 3H4.01001C3.45801 3 3.01501 3.448 3.01501 4C3.01501 4.552 3.46802 5 4.02002 5C4.57202 5 5.02002 4.552 5.02002 4ZM19.5 15.25C19.5 17.287 17.68 18.4889 16.475 19.2849L16.277 19.416C16.193 19.472 16.096 19.5 16 19.5C15.904 19.5 15.807 19.472 15.723 19.416L15.525 19.2849C14.32 18.4889 12.5 17.287 12.5 15.25C12.5 13.32 14.07 11.75 16 11.75C17.93 11.75 19.5 13.32 19.5 15.25ZM17.02 15.25C17.02 14.698 16.572 14.25 16.02 14.25H16.01C15.458 14.25 15.015 14.698 15.015 15.25C15.015 15.802 15.468 16.25 16.02 16.25C16.572 16.25 17.02 15.802 17.02 15.25Z" fill="#87898F"/>
						</svg>
					</div>	
					<span>Your plan</span>
				</li>
				<li>
					<div class="icon">
						<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18 15.5001V19.0001H13.5V14.0001H16.5C17.5 14.0001 18 14.5001 18 15.5001ZM1.5 12.0001C0.5 12.0001 0 12.5001 0 13.5001V19.0001H4.5V12.0001H1.5ZM12 10.5001C12 9.50005 11.5 9.00005 10.5 9.00005H7.5C6.5 9.00005 6 9.50005 6 10.5001V19.0001H12V10.5001ZM8.62601 0.760062L7.871 2.28301C7.814 2.39801 7.704 2.47702 7.578 2.49602L5.83501 2.7481C5.51501 2.7941 5.388 3.18606 5.619 3.41106L6.879 4.63409C6.971 4.72309 7.013 4.85206 6.991 4.97906L6.703 6.65105C6.644 6.99105 7.002 7.25002 7.308 7.09002L8.819 6.299C8.932 6.24 9.068 6.24 9.181 6.299L10.693 7.09099C10.999 7.25099 11.356 6.99203 11.297 6.65203L11.009 4.97808C10.987 4.85208 11.029 4.72311 11.121 4.63311L12.381 3.41009C12.613 3.18509 12.485 2.793 12.165 2.747L10.422 2.49505C10.295 2.47705 10.185 2.39703 10.129 2.28203L9.37399 0.759085C9.22099 0.451085 8.77901 0.451062 8.62601 0.760062Z" fill="#87898F"/>
						</svg>			
					</div>			
					<span>Leaderboard</span>
				</li>
				<li>
					<div class="icon">
						<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.00903 4.5C4.00903 2.294 5.80303 0.5 8.00903 0.5C10.215 0.5 12.009 2.294 12.009 4.5C12.009 6.706 10.215 8.5 8.00903 8.5C5.80303 8.5 4.00903 6.706 4.00903 4.5ZM10 10.5H6C1.94 10.5 0.5 13.473 0.5 16.019C0.5 18.296 1.71105 19.5 4.00305 19.5H11.9969C14.2889 19.5 15.5 18.296 15.5 16.019C15.5 13.473 14.06 10.5 10 10.5Z" fill="#87898F"/>
						</svg>
					</div>
					<span>Profile</span>
				</li>												
			</ul>
		</div>        
    </AppLayout>
</template>

<style scoped>

</style>
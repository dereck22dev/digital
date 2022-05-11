/*****************AUTHOR:amour dahou********************/
/*************GITHUB:http://github.com/Amour22**********/
/*******************COPYRIGHT 2022**********************/
/**************ALL RIGHT RESERVED**********************/

//declaration et initialisation de variables
const hamburger=document.querySelector('.hamburger');
const hamburgerBox=document.querySelector('.hamburgerBox');
const header=document.querySelector('header');
const navigation=document.querySelector('nav');
const copyYear=document.querySelector('.copyYear');
const goUp=document.querySelector('.goUp');
let Pagedown=document.querySelector('.copyrightBox');
let PagedownPos=Pagedown.getBoundingClientRect().y;

//STICKY HEADER
window.addEventListener('scroll',sticky_header);
function sticky_header(){
	header.classList.toggle('sticky',window.scrollY>0);
}

//MENU POUR MOBILE
//affichage du menu
hamburger.addEventListener('click',showNav);
function showNav(){
	navigation.classList.toggle('showNav');
	closeNav();
}
//affichage du bouton de fermeture
function closeNav(){
	hamburger.classList.toggle('closeMenu');
	hamburgerBox.classList.toggle('hamburgerBoxFixation');
}
//fermeture lorsqu'un lien du menu est cliqué
const navLink=document.querySelectorAll('nav ul li a');
navLink.forEach(i=>{
	i.addEventListener('click',()=>{
		navigation.classList.remove('showNav');
		hamburger.classList.remove('closeMenu');
		hamburgerBox.classList.remove('hamburgerBoxFixation');
	});
});

//BOUTON ALLER VERS LE HAUT 
window.addEventListener('scroll',toggleBtn);
function toggleBtn(){
	goUp.classList.toggle('showGoUpBtn',window.scrollY>(window.outerHeight)*2 && window.scrollY<PagedownPos);
}
//MISE A JOUR DU COPYRIGHT
let nYear=new Date();
copyYear.textContent=nYear.getFullYear();
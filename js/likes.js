import { initializeApp, setLogLevel } from "firebase/app";
import {
	getFirestore,
	doc,
	increment,
	updateDoc,
	onSnapshot
} from "firebase/firestore";

import URL_heart from'../img/heart.svg';
import URL_heartRed from'../img/heart-red.svg';

const firebaseConfig = {
	apiKey: "AIzaSyCfd3SatHBUIE1IOkMIchKQiuY-PKnaFic",
	authDomain: "my-testing-c3f4e.firebaseapp.com",
	projectId: "my-testing-c3f4e",
	storageBucket: "my-testing-c3f4e.appspot.com",
	messagingSenderId: "1019389789219",
	appId: "1:1019389789219:web:4e1321bbcf2ed0950ddd96",
	measurementId: "G-D73BT7CZ86",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const buttons = [
	{
		name: "Profile",
		btn_id: "profileBtn",
		counter_id: "profileCounter",
		heart_id: "profileImg",
		picture_id: 'profilePicture',
		collection: "profile",
		liked: false,
	},
	{
		name: "About me",
		btn_id: "aboutBtn",
		counter_id: "aboutCounter",
		heart_id: "aboutImg",
		picture_id: 'cat1',
		collection: "about",
		liked: false,
	},
	{
		name: "Skills",
		btn_id: "skillsBtn",
		counter_id: "skillsCounter",
		heart_id: "skillsImg",
		picture_id: 'cat2',
		collection: "skills",
		liked: false,
	},
];

const updateIcon = (params) => {
	const getLocal = localStorage.getItem(params.collection, params.liked);
	const loadedState = JSON.parse(getLocal);
	params.liked = loadedState;
	if (loadedState) {
		document.getElementById(params.heart_id).src = URL_heartRed;
	} else {
		document.getElementById(params.heart_id).src = URL_heart;
	}
};

// iterates the node information array
buttons.forEach((params) => {
	let button = document.getElementById(params.btn_id);
	let image = document.getElementById(params.heart_id);
	let counter = document.getElementById(params.counter_id);

	// button and image listener
	const postBtn = document.getElementById(params.btn_id);
	postBtn.addEventListener("click", () => {
		postData();
	});
	
	const postPicture = document.getElementById(params.picture_id);
	postPicture.addEventListener("dblclick", () => {
		postData();
	});

	counter.innerHTML = "wait...";
	// listen for changes in database
	onSnapshot(doc(db, "likes-counter", "likes"), (doc) => {
		counter.innerHTML = `${doc.data()[params.collection]} likes`;
		updateIcon(params);
	});

	// manage data to database
	const postData = async () => {
		button.disabled = true;
		counter.innerHTML = "wait...";
		const likesRef = doc(db, "likes-counter", "likes");
		if (params.liked) {
			// post dislike
			await updateDoc(likesRef, {
				[params.collection]: increment(-1),
			}).then(() => {
				image.src = URL_heart
				params.liked = false;
				button.disabled = false;
			});
		} else {
			// post like
			await updateDoc(likesRef, {
				[params.collection]: increment(1),
			}).then(() => {
				image.src = URL_heartRed
				params.liked = true;
				button.disabled = false;
			});
		}

		localStorage.setItem(params.collection, params.liked);
	};
});

// document.getElementById("reset").addEventListener("click", () => {
// 	const likesRef = doc(db, "likes-counter", "likes");
// 	buttons.forEach((el) => {
// 		let img = document.getElementById(el.heart_id);
// 		let button = document.getElementById(el.btn_id);

// 		updateDoc(likesRef, {
// 			[el.collection]: 0,
// 		}).then(() => {
// 			img.src = "./img/heart.svg";
// 			el.liked = false;
// 			localStorage.setItem(el.collection, el.liked);
// 			console.log(`${el.collection} reset to zero`);
// 			button.disabled = false;
// 		});
// 	});
// });

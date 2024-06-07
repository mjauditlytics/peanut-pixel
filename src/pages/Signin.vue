<template>
  <main class="bg-white dark:bg-slate-900">

    <div class="relative flex">

      <!-- Content -->
      <div class="w-full md:w-1/2">
        <div class="min-h-[100dvh] h-full flex flex-col after:flex-1">

          <div class="flex-1">
            <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
              <!-- Logo -->
              <router-link class="block pt-5 mt-5" to="/">
                <img src="../images/logo4.png" alt="audit AI Logo">
                <!-- <svg width="32" height="32" viewBox="0 0 32 32">
                  <defs>
                    <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                      <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%" />
                      <stop stop-color="#A5B4FC" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                      <stop stop-color="#38BDF8" stop-opacity="0" offset="0%" />
                      <stop stop-color="#38BDF8" offset="100%" />
                    </linearGradient>
                  </defs>
                  <rect fill="#6366F1" width="32" height="32" rx="16" />
                  <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                  <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
                  <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
                </svg>
                <a class="text-black font-inter text-xl" >Audit AI</a> -->
              </router-link>
            </div>
          </div>          

          <div class="max-w-sm mx-auto w-full px-4 py-8">
            <h1 class="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Please Sign in ✨</h1>
            <!-- Form -->
            <form @submit.prevent="signIn">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="email">Email Address</label>
                  <input id="email" class="form-input w-full" type="email" v-model="email" required/>
                  <div v-if ="errType === 'username'" class="text-xs mt-1 text-rose-500">{{ errMsg }}</div>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="password">Password</label>                                
                  <input id="password" class="form-input w-full" type="password" autoComplete="on" v-model="password" required/>
                  <div v-if ="errType === 'password'" class="text-xs mt-1 text-rose-500">{{ errMsg }}</div>
                </div>
              </div>
              <div v-if ="errMsg !== ''" class="text-xs mt-1 text-rose-500">{{ errMsg }}</div>
              <div class="flex items-center justify-between mt-6">
                <div class="mr-1">
                  <router-link class="text-sm underline hover:no-underline" to="/reset-password">Forgot Password?</router-link>
                </div>
                <button :disabled="signInBtnDisabled" class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3" type="submit">Sign in</button>
                <!-- <router-link class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3" to="/">Sign In</router-link> -->
              </div>
            </form>
            <div class="pt-5 mt-6 border-t border-slate-200 dark:border-slate-700">
            <!-- https://tailwindflex.com/shakti/google-login-signup-button -->
              <button
                class="align-center px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo">
                <button class="text-slate-800 dark:text-slate-100" @click.prevent="signInWithGoogle">Login with Google</button>
            </button>
          </div>
            <!-- Footer -->
            <div class="pt-5 mt-6 border-t border-slate-200 dark:border-slate-700">
              <div class="text-sm">
                Don’t you have an account? <router-link class="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" to="/signup">Sign Up</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Image -->
      <!-- <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
        <img class="object-cover object-center w-full h-full" src="../images/auth-image.jpg" width="760" height="1024" alt="Authentication" />
        <img class="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src="../images/auth-decoration.png" width="218" height="224" alt="Authentication decoration" />
      </div> -->

    </div>

  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

import { useAuthStore } from "../stores/useAuthStore";
import { useUserStore } from "../stores/useUserStore";

import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const userStore = useUserStore();

const email = ref("");
const password = ref("");
const errMsg = ref();
const errType = ref(); // username ,  password
const signInBtnDisabled = computed(() => !email.value || !password.value);

const handlePostLogin = async (auth, checkIfExists) => {
  console.log("Successfully logged in", auth.currentUser);
  console.log("Do i need to hec? ", checkIfExists)
  
  
  
  if (checkIfExists) {
    const userExists = await userStore.doesUserExist(auth.currentUser.uid);
    if (! userExists) {
      console.log("User does not exist, creating, and proceeding to dashboard");
      await authStore.createAndSetUser(auth.currentUser);
      router.push("/dashboard");
      return;
    }
  }
    
  authStore.setUser(auth.currentUser);
  router.push("/dashboard");
};

const signIn = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => handlePostLogin(auth, false))
    .catch(error => {
      console.log("Error signing in", error);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email address";
          errType.value = "username";
          break;
        case "auth/user-not-found":
          errMsg.value = "User not found";
          errType.value = "username";
          break;
        case "auth/wrong-password":
          errMsg.value = "Wrong password";
          errType.value = "password";
          break;
        case "auth/email-already-in-use":
          errMsg.value = "Email already in use";
          errType.value = "username";
          break;
        default:
          errMsg.value = error.code;
      }
    });
};

const signInWithGoogle = () => {
  const auth = getAuth();
  const googleAuthProvider = new GoogleAuthProvider();
  // googleAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  signInWithPopup(auth, googleAuthProvider)    
    .then(data =>
        handlePostLogin(auth, true)
     )
    .catch(error => {
      console.log("Error signing in", error);
    });
};
const signInWithFB = () => {
  alert("Not yet imlpemented");
};
</script>
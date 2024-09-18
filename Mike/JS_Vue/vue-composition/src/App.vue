<script setup>
import { reactive, ref } from "vue";
import FormComponent from "./components/FormComponent.vue";
import ComputeComponent from "./components/ComputeComponent.vue";
import WatcherComponent from "./components/WatcherComponent.vue";
import PropComponent from "./components/PropComponent.vue";
import ProfileForm from "./components/ProfileForm.vue";
import OptionComponent from "./components/OptionComponent.vue";

/*  Binding  */
// const message = "Hello world";
const counterRef = ref(0);
const counterReactive = reactive({ count: 0 });
const searchText = ref("v-model");
const eventName = ref("event");

const increment = () => {
  counterRef.value++;
  counterReactive.count++;
};

const eventInput = (event) => {
  eventName.value = event.target.value;
};

/*  Condition */
const isCheck = ref(false);
const showApp = ref(false);
const showForm = ref(false);
const showCompute = ref(false);
const showWatcher = ref(false);
const showProp = ref(false);
const showProfile = ref(false);
const showOption = ref(false);

/*  Prop  */
const propMessage = ref("Hi");
const propFunction = (newMessage) => {
  propMessage.value = newMessage;
};

const toggleCheck = () => {
  isCheck.value = !isCheck.value;
};

/*  Loop  */
const items = ref(["item1", "item2", "item3"]);
</script>


<template>
  <div>
    <button @click="showApp = !showApp">show app</button>
    <div v-show="showApp" class="content">
      <!-- Binding -->
      <div>
        <div>Hello Ref: {{ counterRef }}</div>
        <div>Hello Reactive : {{ counterReactive.count }}</div>
        <button @click="increment">Add counter</button>
        <div>{{ searchText }}</div>
        <input type="text" v-model="searchText" />
        <div>{{ eventName }}</div>
        <input type="text" @input="eventInput" />
      </div>

      <!-- Condition -->
      <div>
        <div v-if="isCheck">isCheck</div>
        <div v-else>notCheck</div>
        <button @click="toggleCheck()">toggle</button>
      </div>

      <!-- Loop -->
      <div>
        <ul>
          <li v-for="(item, index) in items" key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Workshop -->
    <br />
    <button @click="showForm = !showForm">show form</button>
    <form-component class="content" v-show="showForm" />
    <br />
    <button @click="showCompute = !showCompute">show compute</button>
    <compute-component class="content" v-show="showCompute" />
    <br />
    <button @click="showWatcher = !showWatcher">show watcher</button>
    <watcher-component class="content" v-show="showWatcher" />
    <br />
    <button @click="showProp = !showProp">show prop</button>
    <prop-component
      :messageText="propMessage"
      :messageFunction="propFunction"
      class="content"
      v-show="showProp"
    />
    <div style="display: flex; justify-content: center">
      <div style="padding-right: 20px">
        <br />
        <button @click="showProfile = !showProfile">show profile</button>
        <profile-form
          :title="'Composition Format'"
          class="content"
          v-show="showProfile"
        />
      </div>
      <div>
        <br />
        <button @click="showOption = !showOption">show option</button>
        <option-component
          :title="'Option Format'"
          class="content"
          v-show="showOption"
        />
      </div>
    </div>
  </div>
</template>

<style>
.content {
  background: gray;
  border-radius: 8px;
}
</style>
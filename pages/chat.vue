<template>
  <div class="chat-wrapper">
    <div class="message-wrapper">
      <div
          v-for="(message, i) in chat"
          :key="i"
          class="chat-message"
          :class="{'chat-seller-message': message.from !== user.login}"
      >
        {{ message.text }}
      </div>
    </div>
    <input type="text" v-model="message" @keyup.enter="sendMessage">
  </div>
</template>

<script setup lang="ts">
definePageMeta({middleware: 'auth'})

const {user} = useLogin()
const seller = useState<string>('seller')
const chat = useState<Message[]>('chat', () => [{text: 'Добрый день, все еще продаю.', from: seller.value}])
const message = ref('')

function sendMessage(): void {
  if (message.value.trim() === '') {
    return
  }

  chat.value.push({text: message.value, from: user.value.login})
  message.value = ''
}
</script>

<style scoped lang="scss">
.chat-wrapper {
  position: relative;
  top: 1vh;
}

.message-wrapper {
  overflow: auto;
  height: 75vh;
}

.chat-message {
  background-color: scale-color($app-color-theme, $lightness: +20%);
  overflow-wrap: break-word;
  width: 70vw;
  position: relative;
  left: 4vw;
  margin: .2rem;
  padding: .8rem;
}

.chat-seller-message {
  background-color: scale-color($app-color-theme, $lightness: -20%);
  position: relative;
  left: 20vw;
}

input {
  width: 80vw;
  padding: 1rem;
  color: black;
  position: fixed;
  right: 5vw;
  bottom: 6rem;
}
</style>

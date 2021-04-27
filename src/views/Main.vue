<template>
    <table border="0">
      <!-- <tr>
        <td colspan="2">
          <input ref='phone' placeholder="휴대폰 번호 입력" v-model="phone" maxlength="13" @keyup="getPhoneMask(phone)"/>
        </td>
      </tr> -->
      <tr>
        <td>
          <router-link to="/movie" tag="button" class="btn big-rounded orange">예매하기</router-link>
            <!-- <button class="big-rounded orange" @click='onClick'>예매하기</button>
          </router-link> -->
        </td>
        <td>
          <router-link to="/" tag="button" class="btn big-rounded orange">예매확인</router-link>
        </td>
      </tr>
    </table>
</template>
<script>
export default {
    name: 'Main'
}
</script>
<template>
    <table border="0">
		<tr>
			<td colspan="2">휴대폰 번호 입력</td>
		</tr>
		<tr>
			<td colspan="2">
				<input v-model="hp" placeholder="010-0000-0000" />
			</td>
		</tr>
		<tr>
			<td>
				<button>예매하기</button>
			</td>
			<td>
				<button>예매확인</button>
			</td>
		</tr>
	</table>
    
</template>

<script>  
export default {

  data(){
      return{ 
        hp : ''
        }
        console.log(hp)
      }
    }
</script>

<style>

</style>

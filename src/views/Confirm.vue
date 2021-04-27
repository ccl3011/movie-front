<template>
    <div>
        <table>
            <tr>
                <th>영화 제목</th>
                <th>시간</th>
                <th>상영관</th>
                <th>예약 좌석</th>
                <th>인원수</th>
                <th>총 가격</th>
            </tr>
            <tr>
                <td>{{movie.movie_title}}</td>
                <td>{{movie.room_movie_time}}</td>
                <td>{{movie.room_num}}</td>
                <td>{{res}}</td>
                <td>{{ppl}}</td>
                <td>{{total_price}}</td>
            </tr>
            <tr>
                <td colspan="6"><button class="btn orange" @click="goHome">Home</button></td>

            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props: ['movie', 'seats', 'ppl', 'total_price'],
    mounted () {
         
    },
    data () {
        return {
            seats:[],
        }
    },
    computed: {
        res () {
            return this.seats.join(',')
        }
    },
    methods: {
        goHome () {
            this.$router.push('/')
        }
    }
}
</script>
<template>
    <div>
        <div class='layer'>
            <a @click="exit" class="exit">X</a> 
            <div>
                <h2>좌석 선택</h2> 
            </div>
            <div>
                관람인원:
                <button class='btn minus none small' @click='minus_ppl'>-</button>
                {{ppl}}명
                <button class='btn plus small' @click='plus_ppl'>+</button>

                <div>
                    <table>
                        <tr>
                            <td>영화제목: {{movie.movie_title}}</td>
                            <td>영화시간: {{movie.room_movie_time}}</td>
                            <td>영화관: {{movie.room_num}}관</td>
                            <td>영화가격: {{movie.movie_price}}원</td>
                        </tr>
                    </table>
                </div>
                <div class='tb box'>
                    <table>
                        <tr>
                            <th style="border:solid 0.5px black; width:50%;" :colspan="cols"><h3 class="screen">screen</h3></th>
                        </tr>
                        <tr v-for="(row,index) in Number(rows)" v-bind:key="index">
                            <td v-for="(col,index) in Number(cols)" v-bind:key="index">
                                <!-- {{(row-1)*10+col}} -->
                                <button class="btn small seat" @click="onClickSeat($event, row,col)">{{String.fromCharCode(row+64)}}{{col}}</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div>
                <div>선택 좌석: {{res}}</div>
                <div>총 가격: {{Number(movie.movie_price)*ppl}}원</div>
            </div>
            <input placeholder="휴대폰 번호 입력" v-model="phone" maxlength="11" @input="getPhoneMask"/>
            <button class="btn" @click="booking">확인</button>
        </div>
        <div id='dim'/>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SeatsDialog',
    props: ['showAlertFlag', 'movie'],
    created () { // 화면 그리기 전
        
    }, 
    mounted () { // 화면 다 그린 후
        // let info = {
        //     room_num: this.movie.room_num,
        //     room_movie_time: this.movie.room_movie_time
        // }

        axios
            .post('http://localhost:8000/api/room', null, {
                params:{
                    room_num: this.movie.room_num,
                    room_movie_time: this.movie.room_movie_time
                }
            })
            .then(res => {
                //console.log(res)
                this.room_id = res.data.room_id
                this.rows = res.data.room_row
                this.cols = res.data.room_col
                //console.log(this.rows)
                //console.log(this.cols)
            })
            .catch(err => {
                console.log(err)
            })  
    },
    data () {
        return {
            phone:'',
            ppl:0,
            room_id:0,
            rows:0,
            cols:0,
            seats:[],
            is_show:false
        }
    },
    computed: {
        res () {
            return this.seats.join(',')
        }
    },
    methods: {
        exit() {
            this.$emit('update:showAlertFlag', false) //parent에서 받아오는 데이터를 변경 emit
        },
        minus_ppl(){
            if(this.ppl<1){
                return
            }
            this.ppl = this.ppl-1;
        },
        plus_ppl(){
            this.ppl = this.ppl+1;
            //console.log(this.ppl)
        },
        
        getPhoneMask() {
            console.log(this.phone)
            this.phone = this.phone.replace(/[^0-9]/g, '')
            
            // if(this.phone.length < 4){
            //     this.phone = this.phone
            // }
            
            // if(this.phone.length>=4 && this.phone.length<7){
            //         this.phone = this.phone.substr(0,3) + '-' + this.phone.substr(3)
            //     }

            // if(this.phone.length>7){
            //     this.phone = this.phone.substr(0,3) + '-' + this.phone.substr(3, 7) + '-' + this.phone.substr(7)

            // }
                
            
            // if(this.phone.length >= 4 && this.phone.length <8){
            //     this.phone = this.phone.substr(0,3) + '-' + this.phone.substr(3)
            // }
            // if(this.phone.length >= 8) {
            //     this.phone = this.phone.substr(0,3) + '-' + this.phone.substr(4, 8) + '-' + this.phone.substr(8)
            // }
        //서버 전송 값에는 '-' 를 제외하고 숫자만 저장
        //this.model.phone = this.phone.replace(/[^0-9]/g, '')
        },

        onClickSeat (event, row,col) {
            // this.seats = this.seats + ',' + String.fromCharCode(row+64)+col
            // console.log(this.seats.substr(1))
            let seat = String.fromCharCode(row+64)+col
            console.log(seat)

            if(this.ppl == 0) {
                return
            } 
            
            if(!this.seats.includes(seat)){
                if(this.seats.length < this.ppl){
                    this.seats.push(seat)
                    event.target.id = 'select'
                }
            }else{
                this.seats.pop(seat)
                event.target.id = ''
            }
            let res= this.seats.join(',')
            console.log(res)
        },

        booking() {
            if(this.phone<11){
                return
            }

            // console.log(this.phone)
            // console.log(this.ppl)
            // console.log(this.res)
            // console.log(Number(this.movie.movie_price)*this.ppl)
            // console.log(this.movie.movie_id)
            // console.log(this.room_id)
            
            axios
                .put('http://localhost:8000/api/booking', null, {
                    params:{
                        booking_hp: this.phone,
                        booking_ppl: this.ppl,
                        booking_seat: this.res,
                        booking_total_price: Number(this.movie.movie_price)*this.ppl,
                        movie_movie_id: this.movie.movie_id,
                        room_room_id: this.room_id
                    }
                })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            this.$router.push({ name: 'confirm', params: { movie: this.movie, seats: this.seats, ppl:this.ppl, total_price: Number(this.movie.movie_price)*this.ppl }})
        }
    }
}
</script>
<style>

#dim {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    position: fixed;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    z-index: 9999;
}

.layer {
    width: 40%;
    height: auto;
    position: absolute;
    top: 5%; /*32 */
    left: 25%; /* 32 */
    background: #FFFFFF;
    z-index: 10000;
    border-radius: 9px;
    padding: 10px;
    text-align: center;
}

.exit {
    float: right;
}

.seat {
    display: inline-block;
}

#select {
    background: #da7c0c;
}

.tb.box {
    white-space: nowrap;
    overflow: auto;
}
</style>
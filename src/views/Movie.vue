<template>
    <div>
        <table id="movieTable">
            <thead>
                <tr>
                    <th>순서</th>
                    <th>제목</th>
                    <th>시간</th>
                    <th>상영관</th>
                    <th>가격</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(movie,index) in movies" v-bind:key="index">
                    <td>{{index+1}}</td>
                    <td>{{movie.movie_title}}</td>
                    <td>{{movie.room_movie_time}}</td>
                    <td>{{movie.room_num}}관</td>
                    <td>{{movie.movie_price}}원</td>
                    <td><button class="btn orange" @click="handle(movie)">예매</button></td>
                </tr>
            </tbody>
        </table>
        <SeatsDialog v-if='showAlertFlag' :showAlertFlag.sync='showAlertFlag' :movie='currentMovie'/> <!--sync여서 child에서 값 변경 가능-->
        <!-- <div v-if='showAlertFlag'>hELLO world</div> -->
    </div>
</template>
<script>
import SeatsDialog from '../components/SeatsDialog'
import axios from 'axios'

export default {
    components: {
        SeatsDialog
    },
    
    data () {
        //movie : this.movie,
        //movies : this.movies
        // movies: [{movie_title: "클레멘타인", room_movie_time: "09:00", movie_price: "10000", room_num: "1"},
        // {movie_title: "클레멘타인", room_movie_time: "15:00", movie_price: "10000", room_num: "1"},
        // {movie_title: "클레멘타인", room_movie_time: "21:00", movie_price: "10000", room_num: "1"}]
        return { 
            movies:null,
            showAlertFlag: false,
            currentMovie: undefined
        } 
    },
    mounted () {
        axios.get('http://localhost:8000/api/movie/all')
        .then(res => {
            console.log(res)
            this.movies = res.data
            console.log(movies)
        })
        .catch(err => {
            console.log(err)
        })  
    },

    methods: {
        handle(movie) {
            this.currentMovie = movie
            this.showAlertFlag = true
        }
    }
    
}
</script>
<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
}

#movieTable { 
  text-align: center;
  /* border: 0.1px solid #333; */
}

#movieTable.td {
    border:1px solid black;
}

.btn, input, screen {
    display: inline-block;
    outline: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font: 14px/100% Arial, Helvetica, sans-serif;
    padding: .5em 2em .55em;
    text-shadow: 0 1px 1px rgba(0,0,0,.3);
    -webkit-border-radius: .5em; 
    -moz-border-radius: .5em;
    border-radius: .5em;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
    -moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
}
.btn:hover {
    text-decoration: none;
}
.btn:active { 
    position: relative;
    top: 1px;
}

.big-rounded {
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
}
.medium {
    font-size: 12px;
    padding: .4em 1.5em .42em;
}
.small {
    font-size: 11px;
    padding: .2em 1em .275em;
}
.orange, th {
    /*color: #fef4e9;*/
    color: black;
    border: solid 1px #da7c0c;
    background: #f78d1d;
    background: -webkit-gradient(linear, left top, left bottom, from(#faa51a), to(#f47a20));
    background: -moz-linear-gradient(top,  #faa51a,  #f47a20);
    filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#faa51a', endColorstr='#f47a20');
}
.orange:hover {
    background: #f47c20;
    background: -webkit-gradient(linear, left top, left bottom, from(#f88e11), to(#f06015));
    background: -moz-linear-gradient(top,  #f88e11,  #f06015);
    filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#f88e11', endColorstr='#f06015');
}
.orange:active {
    color: #fcd3a5;
    background: -webkit-gradient(linear, left top, left bottom, from(#f47a20), to(#faa51a));
    background: -moz-linear-gradient(top,  #f47a20,  #faa51a);
    filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#f47a20', endColorstr='#faa51a');
}

</style>

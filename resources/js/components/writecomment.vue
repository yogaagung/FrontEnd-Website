<template>
    <div>
        <div class="cmnt_frm mar_t30">
            <h2 class="post_dtls_title2 pad_b20">Leave A Comment</h2>
            <div class="cmnt_frm_all">
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="cmnt_input">
                            <p class="mar_b10">MESSAGE</p>
                            <textarea
                                placeholder="Type your comment"
                                name="message"
                                required=""
                                v-model="data.commentTxt"
                            ></textarea>
                        </div>
                    </div>
                    <div class="dtls_frm_btn mar_t20">
                        <button class="btn1" @click="addComment">send message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:{
                commentTxt : '',
            }
        }
    },
    methods:{
        async addComment(){
            const res = await this.callApi('post', '', this.data)
            if(res.status == 200){
                
            }else{
                this.swr()
            }
        }
    }
}
</script>

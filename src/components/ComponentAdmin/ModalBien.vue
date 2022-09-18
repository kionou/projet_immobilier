<template>
  <div>
     <div class="modal-container" id="modal" v-if="revele" @click="submit">
        <div class="modal">
           <h1>Enregistrement des biens immobiliers</h1>
           <form action="">
            <div class="form_groupe">
                <input type="text" placeholder="Non du bien">
                <input type="text" placeholder="Prix du bien">
            </div>
             <div class="form_groupe">
                <input type="text" placeholder="Nombre de pieces">
                <input type="text" placeholder="superficie">
            </div>
             <div class="form_groupe">
                <input type="text" placeholder="Nombre de chambre">
                <input type="text" placeholder="Nombre de douche">
            </div>
             <div class="form_groupe">
                <input type="text" placeholder="Ville ">
                <input type="text" placeholder="Commune">
            </div>
            <div class="textArea">
                <textarea name="" id="" cols="71" rows="4"></textarea>
            </div>
            <div class="textArea">
                <textarea name="" id="" cols="71" rows="4"></textarea>
            </div>
            <div class="textArea">
                <textarea name="" id="" cols="71" rows="4"></textarea>
            </div>

           <label class="custom-file-upload">
            <input type="file"/>
            <i class="fa fa-cloud-upload"></i> 
                Téléchargement personnalisé
            </label>

            <div class="boutton">
                    <button>Ajouter un bien</button>
                </div>
           </form>
        
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'ModalBien',
    props:['revele','submit']

}
</script>

<style lang="css" scoped>

.modal-container {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .3);
    z-index: 6;
    opacity: 1;
}

.modal-container .modal {
    height: 97vh;
    width: 70%;
    margin: 0 10px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

input {
    margin-bottom: 13px;
    margin-right: 9px;
    margin-left: 10px;
    height: 2.5rem;
    width: 20rem;
    padding: 5px;
    font-size: 18px;
    outline: none;
    border: 1px solid #ccc;
    font-family: 'Roboto Serif',
        serif;
}

textarea{
    margin-bottom: 10px;
    padding: 5px;
    outline: none;
        font-size: 17px;
     border: 1px solid #ccc;
    font-family: 'Roboto Serif',
            serif;
}

input:focus ,textarea:focus {
    border: 1px solid #2288ff;
    outline-offset: 0px;
    outline: none;
}

form{
    margin-top: 10px;
}
input[type="file"] {
    display: none;
}

.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 15px 12px;
    cursor: pointer;
    margin-bottom: 9px;
}
button{
        padding: 12px;
        text-align: center;
        border: none;
        background-color: #2288ff;
        color: white;
        border-radius: 5px;
        font-size: 23px;
        font-family: 'Roboto Serif',
            serif;
}

boutton:hover {
    background-color: white;
    color: #2288ff;
    border: 1px solid #2288ff;
    cursor: pointer;
}

</style>
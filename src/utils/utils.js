import axios from "axios";

export class Utils{
    static uploadImages = async (urls) =>{
        const array = []
        for (const url of urls) {
            try {
                const response = await fetch(url);
                const blob = await response.blob();
                console.log(blob)

                const formData = new FormData();
                formData.append('file', blob);
                const res = await axios.post('https://auth.bizawit.com/api/v1/upload',formData,{
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                array.push(res.data.url);
            }catch (e){
                console.log("The upload errrrororrrrrrrrrr",e)
            }
        }

        return array
    }
}

import axios from "axios";

export default function useSubmitForm(url, form, setResponseMessage) {
  axios
    .post(url, form)
    .then((res) => {
      setResponseMessage({
        success: res.data.success,
        message: res.data.message,
      });
    })
    .catch((e) => {
      setResponseMessage({
        success: false,
        message: e.response.data.message,
      });
    });
}

//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ email: form.email, password:form.password })
// };
// try{
//   const response = await fetch('http://localhost:3001/login_user', requestOptions);
//   const data = await response.json();
//   console.log(data)
// }catch(err){
//   console.log("failed")
//   console.log(err)
// }


// success
//background: "linear-gradient(to right, #00b09b, #96c93d)"

// error
  //background:"linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))"


function order(){
    const btnOrder = document.querySelector('.cartInput .order-bottom button');

    console.log(btnOrder);



    btnOrder.addEventListener('click',()=>{
        Toastify({
            text: "Đặt hàng thành công !!",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
    })

   
}

order();
const nodeMailer=require('nodemailer')
var transport=nodeMailer.createTransport(
    {
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        requireTLS:true,
        auth:{
            user:'manepratik2019@gmail.com',
            pass:'jzru wcpj cwzk nfxa'
    }
    }
)

var mailOptions={
    from:'manepratik2019@gmail.com',
    to:'manepratik2019@gmail.com',
    subject:'Node test mail',
    Text:'use of nodemailer to send mail from localhost'

}

transport.sendMail(mailOptions,function(err,info)
{
    if (err)
    {
       console.log("Failed to send mail")
    }
    else{
        console.log("mail sent successfully")
    }
}
)
const wrapper = document.querySelector('.wrapper');
const SignUplink = document.querySelector('.signUp-link');
const SignInlink = document.querySelector('.signIn-link');
const Btn=document.querySelector('.Btn');
SignUplink.addEventListener('click',()=>{
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');

})
SignInlink.addEventListener('click',()=>{
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');

})
SignUplink.addEventListener('click', function(event) {
    event.preventDefault();
    
    // 这里可以添加你的代码逻辑
    console.log('表单提交被阻止');
  });
SignInlink.addEventListener('click', function(event) {
    event.preventDefault();
    
    // 这里可以添加你的代码逻辑
    console.log('表单提交被阻止');
  });
Btn.addEventListener('click', function(event) {
    event.preventDefault();
    
    // 这里可以添加你的代码逻辑
    console.log('表单提交被阻止');
  });
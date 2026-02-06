// Minimal interactions for the tourism template
document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      if(!name || !email){
        alert('Please provide your name and email.');
        return;
      }
      alert('Thanks, ' + name + '! We\'ll be in touch soon.');
      form.reset();
    });
  }
});
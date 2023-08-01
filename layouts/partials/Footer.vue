<template>
    <footer>
        <div class="footerContainer">
            <div class="footerLeft">
                <a class="footerLogo"  href=""></a>
                <div class="footerNav">
                    <ul>
                        <li><a href="">O nama</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>
            </div>
            <div class="footerRight">
                <div class="socialIcons">
                    <a href=""><fa :icon="['fab', 'instagram']" /></a>
                    <a href=""><fa :icon="['fab', 'facebook']" /></a>
                    <a href=""><fa :icon="['fab', 'twitter']" /></a>
                    <a href=""><fa :icon="['fab', 'youtube']" /></a>
                    <a href=""><fa :icon="['fab', 'linkedin']" /></a>
                </div>
                <div class="footerInfo">
                    <ul>
                        <li><fa :icon="['fas', 'envelope']" style="margin-right: 10px;" />tesmail@gmail.com</li>
                        <li><fa :icon="['fas', 'phone']" style="margin-right: 10px;" />063/123-123</li>
                        <li><fa :icon="['fas', 'location-dot']" style="margin-right: 10px;" />Mostar bb</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footerBottom">
            <p>Copyright &copy;2023</p>
        </div>
    </footer>
</template>

<style>
footer {
  background-color: #D40E63;
  padding: 1rem 3rem 1rem 3rem;
  box-sizing: border-box;
}

.footerContainer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px; 
}

.footerLeft,
.footerRight {
  flex-basis: 100%; 
  text-align: center;
}

.footerRight {
  margin-top: 1rem;
}

.footerLogo {
  background-image: url('static/img/logoRed.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
}

.footerNav {
  margin-top: 10px;
  text-align: center;
}

.footerNav a {
  display: block;
  margin-bottom: 5px;
  text-decoration: none;
  color: #FFFFFF;
  font-size: 25px;
}

.footerNav a:hover {
  color: #2A2A2A;
  opacity: 0.7;
  transition: 0.2s;
}

.footerNav ul {
  list-style-type: none;
  margin: 0;
  padding: 1rem;
  text-align: center;
}

.socialIcons a {
  display: inline-block;
  margin-right: 10px;
  color: #FFFFFF;
  text-decoration: none;
  font-size: 2.5rem;
}

.socialIcons a:hover {
  color: #2A2A2A;
  opacity: 0.6;
  transition: 0.2s;
}

.footerInfo {
  margin-top: 10px;
  padding-bottom: 1rem;
}

.footerInfo ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: #FFFFFF;
  font-size: 1.2rem;
}

.footerBottom p {
  text-align: center;
  margin-bottom: 0;
  color: #FFFFFF;
  font-size: 12px;
  border-top: solid 2px;
  padding-top: 1rem;
}

@media (min-width: 768px) {
  .footerContainer {
    flex-wrap: nowrap;
  }

  .footerLeft,
  .footerRight {
    flex-basis: auto;
    text-align: initial;
  }

  .footerRight {
    margin-top: 0;
  }

  .footerNav,
  .footerInfo {
    text-align: left;
  }
}

@media (max-width: 767px) {
    footer {
      position: static; 
      padding-bottom: 0; 
    }

    .footerContainer {
      flex-direction: column; 
      gap: 0; 
    }

    .footerLeft,
    .footerRight {
      flex-basis: auto;
      text-align: center;
      margin-bottom: 1rem; 
    }

    .footerBottom {
      padding-bottom: 1rem;
    }
  }

</style>
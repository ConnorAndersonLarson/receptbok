import './Home.scss';
import Rcard from '../RecipeCard/RCard.js';
import { useState } from 'react';

function Home() {
  const [photo, setPhoto] = useState('Inga/0.jpg');
  const [recipe, setRecipe] = useState('..test/test_recipe.js');

  return(
    <main>
      <div class="welcome">
        <h2 class="welcomeTitle">Välkommen!</h2>
        <div class="introBox">
          <p class="welcomeText">
            This is a collection of recipes from Inga Sandberg, our grandmother (mormor).
            <br/>
            <br/>
            Originally created for family to more easily access these easily lost fragments of familial history,
            we welcome anyone to come enjoy the food passed down in our family and hope they bring the same
            warmth and joy to you and yours. Var god njut!
            <br/>
            <br/>
            Inga M. Sandberg, 89, went to her heavenly home on January 17, 2024, surrounded by family. Born June 7, 1934, in Evanston, IL,
            the daughter of Paul and Astrid (Carlson) Holaine. Inga graduated from Rockford East High School in 1951. She devoted her to time raising her four children
            (with first husband, Burdette “Bud” Larson) and working as a caterer with her family. Inga married Cliff Sandberg on July 5, 1970, and were together for
            51 amazing years. She was a faithful member of First Free Church, singing in the choir, attending countless Sunday services and bible studies, as well as
            all of her selfless work at Summerwood, painting backdrops and designing stage sets. Swedish heritage was especially important to Inga and her sister, Polly.
            <br/>
            <br/>
            Like most Swedes, her two favorite things were Christmas and coffee. Inga loved hosting parties, sharing recipes/traditions, and loved getting together with
            family as often as she could. Her favorite pastimes were watching baseball, doing puzzles with her grandkids, cooking, painting, and gardening.
            <br/>
            <br/>
            Inga loved family vacations to Eagle River, WI, trips to Fontana beach in Lake Geneva and Edwards Apple Orchard.
            <br/>
            <br/>
            Inga is survived by her children, Mark (Marcia) Larson, Shari (Larry) Sparks, Jodi Kempin, Jeff (Carol) Larson, Laura (Rick) Cochuyt, Connie (Kenny) Dodson, and Bruce (Lisa) Sandberg; 20 grandchildren and many great grandchildren; brother-in-law, Kenneth Nelson; many nieces, nephews, and cousins. Predeceased by her husband, Cliff Sandberg, sister, Pauline (Holaine) Nelson, her parents, and grandparents.
          </p>
          <div className="homeRecipe">
            <Rcard />
          </div>
          <img className="homePic" src={photo} alt="Inga Sandberg"/>
        </div>
      </div>
    </main>
  )
}

export default Home;

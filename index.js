//

import breakWebPage from "website-breaker";

document.getElementById("dangerous-button")
        .addEventListener("click", () => breakWebPage());
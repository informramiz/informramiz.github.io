const Apps = Object.freeze({
    "JirahSitter":"jirah-sitter",
    "JirahParent": "jirah-parent",
    "UnifiedRemote": "unified-remote"
})

function updateViews() {
    let query = getQueryParam()
    document.getElementById("heading").innerHTML = getAppName(query)
    document.getElementById("sub-heading").innerHTML = getAppDescription(query)
    document.getElementById("main-image").src = getAppMainImage(query)
    document.getElementById("contributions").innerHTML = getAppContributions(query)
    document.getElementById("impact").innerHTML = getImpact(query)
    document.getElementById("skills").innerHTML = getSkills(query)
}
updateViews()

function getQueryParam() {
    return window.location.search.substring(1)
}


//App name
function getAppName(query) {
    if (query == Apps.JirahSitter) {
        return "Jirah Sitter App"
    } else {
        return "other App"
    }
}

function getAppDescription(query) {
    if (query == Apps.JirahSitter) {
        return getJirahSitterDescription()
    } else {
        "Pending description"
    }
}

// Main Image
function getJirahSitterDescription() {
    return "At Jirah we connect parent with baby sitters. It\'s just like Uber, except instead of \
    riders and drivers we have parents and baby sitters. This is the Sitter app, the Jirah \
    Parent app which is listed below. \
    I was the lead developer of this app and was \
    responsible for bringing it into existence from its inception to its successful deployment. \
    After its successful deployment, I also lead the development of the Jirah Parent app."
}

function getAppMainImage(query) {
    if (query == Apps.JirahSitter) {
        return "images/apps/jirahsitter/jirah-sitter.png"
    } else {
        return ""
    }
}

// Contributions
function getAppContributions(query) {
    if (query == Apps.JirahSitter) {
        return getJirahSitterContributions()
    } else {
        return ""
    }
}

function getJirahSitterContributions() {
    let contributions = [
        "Lead the development of the Jirah Sitter Android App along with 3 other developers from its inception to its successful deployment.",
        "Brought a clean codebase into existence by using MVVM and the latest libraries such as Kotlin Coroutines, Dagger2, Retrofit2, Android\
    Navigation Component, Work Manager, Room, View Model, LiveData, Android Paging and other Android JetPack libraries",
    "Delivered the Jirah Sitter app, from inception to deployment in under 6 months",
    "Streamlined deployment process by setting up an automatic build &deployment pipeline using Bitbucket Pipeline and Google Play API",
    "Wrote a custom Chat SDK using SendBird SDK and published it as a private repo, now used by both Android apps for chat functionality."
    ]
    return toList(contributions)
}


// Impact
function getImpact(query) {
    if (query == Apps.JirahSitter) {
        return getJirahSitterAppImpact()
    } else {
        return ""
    }
}

function getJirahSitterAppImpact() {
    let impacts = [
        "I defined the code architecture to be MVVM and finalized the navigation and other core libraries which lead to\
        the app being extremely up to date by the time it was released.",
        "I made sure that all code was merged only through Pull Requests (PRs) and all other developers approved PRs before merging them with the develop branch.",
        "I consistently made sure no developer was deviating from the MVVM architecture and all the recommend guidelines were followed.",
        "A the end, the app code proved to be extremely stable, so stable that after release we rarely have to fix any crash.",
        "The app UI was extremely responsive as all the best practices were carefully followed and The app has 5 start rating as of now and no bug has ever been reported by the users.",
        "Last but not least, when I joined the company there was no CI/CD and all development and deployment was being done manually. I configured all apps to use Bitbucket Pipelines \
        and Google Play API so that automatic builds were triggered and production APK was automatically uploaded to the Google Play Internal Testing Track and from there was it was \
        moved to Alpha, Beta and then through staged rollout to the Release channel."
    ]
    return toList(impacts)
}

// Skills
function getSkills(query) {
    if (query == Apps.JirahSitter) {
        return getJirahSitterAppSkills()
    } else {
        return ""
    }
}

function getJirahSitterAppSkills() {
    let skills = [
        "Kotlin",
        "MVVM",
        "Kotlin Coroutines", 
        "Dagger2", 
        "Retrofit2", 
        "Android Navigation Component", 
        "Work Manager", 
        "Room", 
        "View Model", 
        "LiveData", 
        "Android Paging", 
        "DataBinding",
        "ViewBinding",
        "Espresso",
        "JUnit",
        "AndroidX Testing libraries",
        "Hamcrest",
        "Mockito",
        "Picasso",
        "Many other Android JetPack libraries"
    ]
    return toList(skills)
}

//Utility functions
function toList(items) {
    return items.map(li).join("")
}
function li(item) {
    return `<li>${item}</li>`
}
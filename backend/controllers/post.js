let heartIcon = document.querySelector('.activity-log .nav-icon')
let activityContainer = document.querySelector('.activity-container')

heartIcon.addEventListener('click', () => {
    activityContainer.classList.toggle('hide');
    changeIcon(heartIcon);
})

const changeIcon = (icon) => {
    let src = icon.src.split('-')[0];
    if(icon.src.includes('nofill')){
        icon.src = `${src}-fill.png`;
    } else{
        icon.src = `${src}-nofill.png`;
    }
}

const addInterationsToPost = (post) => {
    // post like

    let likeBtn = post.querySelector('.like-btn');
    let likeImg = post.querySelector('.like-icon');

    likeBtn.addEventListener('click', () => {
        if(likeBtn.src.includes('nofill')){
            likeImg.classList.add('show');
            if(shareBtn.src.includes('-fill')){
                shareBtn.click();
            }
        }

        changeIcon(likeBtn);

        setTimeout(() => {
            likeImg.classList.remove('show');
        }, 3000);
    })

    // post share
    let shareBtn = post.querySelector('.send-btn');
    let shareWindow = post.querySelector('.share-window');

    shareBtn.addEventListener('click', () => {
        shareWindow.classList.toggle('active');
        changeIcon(shareBtn)
    })

    let postLink = post.querySelector('#share-link').value;
    let copyLinkBtn = post.querySelector('.copy-btn');

    copyLinkBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(postLink).then(() => {
            shareBtn.click();
        })
    })
}

// post

let posts = [...document.querySelectorAll('.post')];
posts.map(post => addInterationsToPost(post));
// 画像ギャラリー機能を動かす
// ここでやりたいのは、ギャラリーの各サムネイル画像にイベントリスナーをアタッチして
// クリックされたときにメイン画像をサムネイルに対応するものに差し替えること

function activateGallery() {
    let thumbnails  = document.querySelectorAll("#gallery-thumbs div img");
    let mainImage   = document.querySelector("#gallery-photo img");
    let title       = document.querySelector("#gallery-info .title");
    let description = document.querySelector("#gallery-info .description");

    thumbnails.forEach(function(thumbnail) {
        // 大画像をプリロードする
            let newImageSrc   = thumbnail.dataset.largeVersion
            let newImageTitle = thumbnail.dataset.title
            let largeVersion  = new Image();
            largeVersion.src  = thumbnail.dataset.largeVersion

        thumbnail.addEventListener("click", function() {
            
            // クリックされたサムネイル画像をメイン画像として設定する
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", newImageTitle);

            // 現在の画像を変更する
            let currentDiv   = document.querySelector(".current");
            let clickDiv     = thumbnail.parentNode
            let currentClass = "current"

            currentDiv.classList.remove(currentClass);
            clickDiv.classList.add(currentClass)
            
            // 画像の情報を更新する
            let newImageDescription = thumbnail.dataset.description;

            title.innerHTML      = newImageTitle;
            description.innerHTML = newImageDescription;
        });
        });
}
export function ImageShack(file) {

    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append("fileupload", file);
    formData.append("key", "ZGCVRFTAf7d22df57bf5ab78722aa51d2f79ef23");
    formData.append("format", "json");

    let handleProgress;
    let handleStart;
    let handleCompleted;

    const onProgress = (progress) => {
        handleProgress = progress;
        return Object.freeze({ onCompleted, onStart });
    }

    const onStart = (start) => {
        handleStart = start;
        return Object.freeze({ onCompleted, onProgress });
    };

    const onCompleted = (done) => {
        handleCompleted = done;
        return Object.freeze({ onProgress, onStart });

    };

    xhr.upload.onprogress = function (e) {
        if (e.lengthComputable && handleProgress) {
            const { loaded, total } = e;
            handleProgress({ loaded, total });
        }
    };

    xhr.onloadstart = function (e) {
        if (handleStart) {
            handleStart(e);
        }
    }

    xhr.onloadstart = function (e) {
        if (handleStart) {
            handleStart(e);
        }
    }

    xhr.onreadystatechange = function (state) {

        if (xhr.readyState === XMLHttpRequest.DONE) {
            var status = xhr.status;
            if (status === 0 || (200 >= status && status < 400)) {
                const response = JSON.parse(xhr.responseText);
                return handleCompleted({ image_link: response.links.image_link, msg: "Upload Successful." });

            } else {
                return handleCompleted({ error: true, msg: "Service unavailable." });
            }
        }

    }

    xhr.open("POST", '/imageshack');
    xhr.send(formData);

    return Object.freeze({ onCompleted, onProgress, onStart });
}
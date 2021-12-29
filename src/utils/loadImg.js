/*
 * @Author: WePD
 * @Date: 2021-12-29 21:38:59
 */
//等待图片加载成功
export function loadImageAsync(url) {
	return new Promise(function (resolve, reject) {
		const image = new Image()

		image.onload = function () {
			resolve({ url })
		}

		image.onerror = function () {
			reject(new Error("Could not load image at " + url))
		}

		image.src = url
	})
}

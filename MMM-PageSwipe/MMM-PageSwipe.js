Module.register("MMM-PageSwipe", {
	notificationReceived: function(notification) {
		if (notification === "DOM_OBJECTS_CREATED") {
			console.log("[MMM-PageSwipe] DOM ready, registering swipe handler");
			this.registerSwipeHandler();
		}
	},

	registerSwipeHandler: function() {
		let startX = null;
		let startY = null;

		const onStart = (x, y) => {
			startX = x;
			startY = y;
			console.log("[MMM-PageSwipe] Start:", x, y);
		};

		const onEnd = (x, y) => {
			if (startX === null) return;
			const dx = x - startX;
			const dy = y - startY;
			startX = null;
			startY = null;
			console.log("[MMM-PageSwipe] End dx:", dx, "dy:", dy);

			if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
				const notification = dx < 0 ? "PAGE_INCREMENT" : "PAGE_DECREMENT";
				console.log("[MMM-PageSwipe] Sending:", notification);
				this.sendNotification(notification);
			}
		};

		document.addEventListener("touchstart", (e) => {
			onStart(e.touches[0].clientX, e.touches[0].clientY);
		}, { passive: true });

		document.addEventListener("touchcancel", () => {
			startX = null;
			startY = null;
		}, { passive: true });

		document.addEventListener("touchend", (e) => {
			onEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
		}, { passive: true });

		document.addEventListener("mousedown", (e) => {
			onStart(e.clientX, e.clientY);
		});

		document.addEventListener("mouseup", (e) => {
			onEnd(e.clientX, e.clientY);
		});

		console.log("[MMM-PageSwipe] Listeners registered (touch + mouse)");
	}
});

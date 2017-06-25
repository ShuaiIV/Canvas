//封装箭头绘制
(function (window) {
	function Arrow(option) {
		this.ctx = option.ctx;
		this.startX = option.startX;
		this.startY = option.startY;
		this.arrowH = option.height;
		this.arrowW = option.width;
		this.arrowDirection = option.direction;
		this.lineWidth = option.lineWidth || 1;
		this.ctx = option.ctx;
		this.strokeStyle = option.strokeColor || 'black';
		this.fillStyle = option.fillColor || 'black';
		this.fill = option.fill;
		this.stroke = option.stroke;
		this.init();
	}
	Arrow.prototype = {
		constructor: Arrow,
		init: function () {
			this.draw();
		},

		direction: function () {
			switch (this.arrowDirection) {
				case 'left':
					this.x1 = -this.arrowH;
					this.y1 = this.arrowW / 2;
					this.x2 = -this.arrowH / 2;
					this.y2 = 0;
					this.x3 = -this.arrowH;
					this.y3 = -this.arrowW / 2;
					break;
				case 'up':
					this.x1 = this.arrowW / 2;
					this.y1 = this.arrowH;
					this.x2 = 0;
					this.y2 = this.arrowH / 2;
					this.x3 = -this.arrowW / 2;
					this.y3 = this.arrowH;
					break;
				case 'right':
					this.x1 = this.arrowH;
					this.y1 = -this.arrowW / 2;
					this.x2 = this.arrowH / 2;
					this.y2 = 0;
					this.x3 = this.arrowH;
					this.y3 = this.arrowW / 2;
					break;
				case 'down':
					this.x1 = -this.arrowW / 2;
					this.y1 = -this.arrowH;
					this.x2 = 0;
					this.y2 = -this.arrowH / 2;
					this.x3 = this.arrowW / 2;
					this.y3 = -this.arrowH;
					break;
			}
		},

		path: function () {
			var that = this;
			this.direction();
			this.ctx.beginPath();
			this.ctx.lineWidth = this.lineWidth;
			this.ctx.moveTo(that.startX, that.startY);
			this.ctx.lineTo(that.startX + that.x1, that.startY + that.y1);
			this.ctx.lineTo(that.startX + that.x2, that.startY + that.y2);
			this.ctx.lineTo(that.startX + that.x3, that.startY + that.y3);
			this.ctx.closePath();
		},

		draw: function () {
			this.path();
			this.ctx.strokeStyle = this.strokeColor;
			this.ctx.fillStyle = this.fillColor;
			if (this.fill) {
				this.ctx.fill();
			}
			if (this.stroke) {
				this.ctx.stroke();
			}
			console.log(this);
		}
	}
	window.Arrow = Arrow;
}(window));
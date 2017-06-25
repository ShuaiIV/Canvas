(function (window) {
	function Axis(option) {
		this.ctx = option.ctx;
		this.height = option.ctx.canvas.height;
		this.width = option.ctx.canvas.width;
		this.startX = option.orignX;
		this.startY = option.orignY;
		this.lineColor = option.lineColor || 'black';
		this.lineWidth = option.lineWidth || 1;
		this.ctx = option.ctx;
		this.init(ctx, option);
	}
	Axis.prototype = {
		constructor: Axis,

		init: function () {
			this.draw();
		},

		setOrign: function () {
			this.Xlength = this.width - this.startX * 2;
			this.Ylength = this.height - this.startY * 2;
		},

		path: function () {
			var that = this;
			this.setOrign();
			this.ctx.beginPath();
			this.ctx.moveTo(that.startX, that.startY);
			this.ctx.lineTo(that.startX, that.startY + that.Ylength);
			this.ctx.lineTo(that.startX + that.Xlength, that.startY + that.Ylength);
		},

		draw: function () {
			var that = this;
			ctx.beginPath();
			this.path();
			this.ctx.strokeStyle = this.lineColor;
			this.ctx.lineWidth = this.lineWidth;
			ctx.stroke();
		}
	};

	window.Axis = Axis;
}(window));
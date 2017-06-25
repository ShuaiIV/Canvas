(function (window) {
	function Sector(option) {
		this.orign = option.orign;
		this.start = option.start;
		this.radius = option.radius;
		this.arc = option.arc;
		this.ctx = option.ctx;
		this.lineWidth = option.lineWidth;
		this.lineColor = option.lineColor;
		this.fillColor = option.fillColor;
		this.fill = option.fill;
		this.stroke = option.stroke;
		this.init();
	}
	Sector.prototype = {
		constructor: Sector,
		init: function () {
			this.draw();
		},
		path: function () {
			this.ctx.beginPath();
			this.ctx.moveTo(this.orign.x, this.orign.y);
			this.ctx.arc(this.orign.x, this.orign.y, this.radius, this.start, this.start + this.arc);
			this.ctx.closePath();
		},
		draw: function () {
			this.path();
			this.ctx.lineWidth = this.lineWidth || 1;
			this.ctx.strokeStyle = this.lineColor || 'black';
			this.ctx.fillStyle = this.fillColor || 'black';
			if (this.fill) {
				this.ctx.fill();
				console.log(this);
			}
			if (this.stroke) {
				this.ctx.stroke();
			}
		}
	}
	window.Sector = Sector;
}(window))
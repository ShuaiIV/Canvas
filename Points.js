(function (window) {
	function Points(option) {
		this.ctx = option.ctx;
		this.data = option.data;
		this.pointRadius = option.pointRadius || 4;
		this.lineWidth = option.lineWidth || 1;
		this.lineColor = option.lineColor || 'black';
		this.pointColor = option.pointColor || 'black';
		this.init();
	}

	Points.prototype = {
		constructor: Points,

		init: function (ctx, data, option) {
			this.option = option || {};
			this.getData(data);
			this.pointsMap();
			this.drawLine(ctx, this.option);
			this.drawPoint(ctx, this.option);
		},

		getData: function () {
			this.numsArr = this.data.map(function (val) {
				return val.total;
			});
		},

		pointsMap: function () {
			var unitX = axis.Xlength / (this.numsArr.length + 1);
			var unitY = (axis.Ylength * 0.9) / (Math.max.apply(null, this.numsArr));
			// console.log(unitY);
			this.pointsMap = this.numsArr.map(function (val, i) {
				return [unitX * (i + 1) + axis.startX, axis.startY + axis.Ylength - unitY * val];
			});
		},

		drawPoint: function (ctx, option) {
			
			var that = this;
			this.pointsMap.forEach(function (val) {
				this.ctx.beginPath();
				this.ctx.fillStyle = this.pointColor;
				this.ctx.arc(val[0], val[1], that.pointRadius, 0, Math.PI * 2);
				this.ctx.fill();
			})
		},

		drawLine: function (ctx, option) {
			var that = this;
			this.ctx.beginPath();
			this.ctx.lineWidth = this.lineWidth;
			this.ctx.strokeStyle = this.lineColor;
			this.pointsMap.forEach(function (val) {
				that.ctx.lineTo(val[0], val[1]);
				that.ctx.stroke();
			})
		},

		showName: function () {},

		showNum: function () {}
	};

	window.Points = Points;
}(window));
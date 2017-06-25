(function (window) {
	function PieChart(option) {
		this.ctx = option.ctx;
		this.orign = option.orign;
		this.start = option.start || 0;
		this.radius = option.radius;
		this.data = option.data;
		this.colorArr = option.colorArr || [];
		this.showName = option.showName;
		this.init();
	}
	PieChart.prototype = {
		constructor: PieChart,
		init: function () {
			this.dataAnalysis();
			this.draw();
			this.description();
		},
		dataAnalysis: function () {
			var total = 0;
			var that = this;
			this.data.forEach(function (obj) {
				total += obj.total;
			});
			this.data.map(function (obj, index, arr) {
				obj.arc = obj.total / total * Math.PI * 2;
				index == 0 ? obj.start = that.start : obj.start = arr[index - 1].end;
				index == 0 ? obj.end = that.start + obj.arc : obj.end = arr[index - 1].end + obj.arc;
				obj.color = that.colorArr[index] || '#' + that.randomColor();
			})
		},
		randomColor: function () {
			var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
			return ('' + arr[Math.floor(Math.random() * 16)] + arr[Math.floor(Math.random() * 16)] + arr[Math.floor(Math.random() * 16)] + arr[Math.floor(Math.random() * 16)] + arr[Math.floor(Math.random() * 16)] + arr[Math.floor(Math.random() * 16)]);
		},
		draw: function () {
			var that = this;
			this.data.map(function (obj, index) {
				// console.log(obj);
				that.ctx.beginPath();
				that.ctx.fillStyle = obj.color;
				that.ctx.moveTo(that.orign.x, that.orign.y);
				that.ctx.arc(that.orign.x, that.orign.y, that.radius, obj.start, obj.end);
				that.ctx.closePath();
				that.ctx.fill();
			})
		},
		description: function () {
			if (this.showName) {
				var that = this;
				this.data.map(function (obj, index) {
					// console.log(obj);
					var circleX = that.orign.x + (that.radius / 1.5) * Math.cos(obj.arc / 2 + obj.start);
					var circleY = that.orign.y + (that.radius / 1.5) * Math.sin(obj.arc / 2 + obj.start);
					var textX = that.orign.x + (that.radius * 1.3) * Math.cos(obj.arc / 2 + obj.start);
					var textY = that.orign.y + (that.radius * 1.3) * Math.sin(obj.arc / 2 + obj.start);
					var textWidth = that.ctx.measureText(obj.name).width;
					that.ctx.beginPath();
					that.ctx.moveTo(circleX, circleY);
					that.ctx.lineTo(textX, textY);
					that.ctx.textBaseline = 'bottom';
					if (textX < that.orign.x) {
						that.ctx.textAlign = 'right';
						that.ctx.lineTo(textX - textWidth, textY);
					} else {
						that.ctx.textAlign = 'left';
						that.ctx.lineTo(textX + textWidth, textY);
					}
					that.ctx.fillText(obj.name, textX, textY);
					that.ctx.stroke();
					// console.log(textX);
					// console.log(textY);
					// console.log(textWidth);
				})
			}
		}
	}
	window.PieChart = window.PC = PieChart;
}(window))
import './style.css'
import React, { useEffect, useState } from 'react'

export function BouncingBall() {
	function random() {
		const XY = [1, -1]
		return XY[Math.floor(Math.random() * 2)];
	}
	const [ballPos, setBallPos] = useState([345, 205])
	const [ballDirection, setBallDirection] = useState([random(), random()])
	const [gamePlay, setGamePlay] = useState(false)
	useEffect(() => {
		const ball = document.getElementById('ballGreen').style
		ball.left = `${ballPos[0]}px`
		ball.top = `${ballPos[1]}px`
		if (gamePlay === true) {
			const interval = setInterval(() => {
				play();
			}, 1);
			return () => clearInterval(interval);
		}
	})

	function changeDirection() {
		if (ballPos[0] === 680 || ballPos[0] === 0 || ballPos[1] === 440 || ballPos[1] === 0) {
			let newBallDirection = ballDirection.slice()
			if (ballPos[0] === 680 || ballPos[0] === 0) {
				newBallDirection[0] = newBallDirection[0] *= -1
			}
			if (ballPos[1] === 440 || ballPos[1] === 0) {
				newBallDirection[1] = newBallDirection[1] *= -1
			}
			setBallDirection(newBallDirection)
		}
	}

	function moveBall(ball) {
		let newBallPos = ballPos.slice()
		newBallPos[0] = ballPos[0] + ballDirection[0]
		newBallPos[1] = ballPos[1] + ballDirection[1]
		if (ballPos[1] === 0) {
			newBallPos[1] = ballPos[1] + 1
		}
		if (ballPos[1] === 440) {
			newBallPos[1] = ballPos[1] - 1
		}
		if (ballPos[0] === 0) {
			newBallPos[0] = ballPos[0] + 1
		}
		if (ballPos[0] === 680) {
			newBallPos[0] = ballPos[0] - 1
		}

		setBallPos(newBallPos)
	}
	
		function play() {
			changeDirection()
			moveBall()
		}


		return (
			<div>
				<h2 id="XYid">X:{ballPos[0]} Dir:{ballDirection[0]}| Y:{ballPos[1]} Dir:{ballDirection[1]}  </h2>
				<div id="bouncingBall">
					<div id="ballGreen"></div>
				</div>
				<button onClick={() => setGamePlay(!gamePlay)}>DEBUG</button>
			</div>
		)
	};
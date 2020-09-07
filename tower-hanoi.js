/*There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.
Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.
Examples

towerHanoi(3) ➞ 7

towerHanoi(5) ➞ 31

towerHanoi(0) ➞ 0 */

function towerHanoi(discs) {
    return 2 ** discs - 1;
}

towerHanoi(3)
towerHanoi(5)
towerHanoi(8)
towerHanoi(19)
towerHanoi(9)
towerHanoi(13)
towerHanoi(0)


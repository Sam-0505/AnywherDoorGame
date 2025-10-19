## Anywhere Door

Anywhere Door is a 2D-platformer game where Doraemon wants to eat his favorite Dora cake but has a lot of hurdles in the way. He has his anywhere door with him to reach the Dora cake but the anywhere door has a limited range of travel. Help Doraemon to get his favorite dish.

### Design Concept

1) The game follows a pixelated design language and depicts the top view.
2) It resonates with the block-based movement and animation system in the game.
3) The idea was to keep the game simple and lightweight.


### Gameplay

1) The idea is to get the character to the final position. 
2) For moving to the final position, you can directly move using the w, a,s,d 
3) Teleport using the space key within a square range around the character. There are positions where the character does not have ways to move forward and has to teleport to another location to reach to his position. 
4) Scoring: The faster the character finds a way to the end position, the better he scores.

### Technical Concepts used
1) React: It is the base of the project. React context is used in the project to create a global state and ensure all the components can access it. useAuth custom hook is also used to protect the routes.
2) Redux: It is used for the state management of map images, character and map loading, and the character itself.

### Instructions
1) W,A,S,D -> Top, left, down and right
2) Space -> Start teleportation mode/ End teleportation mode

To use anywhere door(teleportation), 
1) Click on the Space key and the anywhere door pops out
2) Used w,a,s,d to move the door
3) Once the door is in the right place, click space again to teleport

https://github.com/user-attachments/assets/24f319ed-2af8-45de-9044-8ab27d2e31a0





document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('grid-container');

    // Object to hold the number of images in each group
    const imageCounts = {
        black: 29, // Replace with actual number of images in the 'black' folder
        blue: 52,  // Replace with actual number of images in the 'blue' folder
        bright: 20, // Replace with actual number of images in the 'bright' folder
        cloth: 162,   // Replace with actual number of images in the 'cloth' folder
        dark: 24,   // Replace with actual number of images in the 'dark' folder
        middle: 20  // Replace with actual number of images in the 'middle' folder
    };

    // Object to hold arrays of image paths for each group
    const imageGroups = {
        black: [],
        blue: [],
        bright: [],
        cloth: [],
        dark: [],
        middle: []
    };

    // Populate each group array with image paths
    Object.keys(imageCounts).forEach(group => {
        for (let i = 1; i <= imageCounts[group]; i++) {
            imageGroups[group].push(`${group}/${group}${i}.jpg`); // constructs the image path
        }
    });

    function getRandomImage(imageGroup) {
        const randomIndex = Math.floor(Math.random() * imageGroup.length);
        return imageGroup[randomIndex];
    }

        // Function to start a slideshow for a specific group in a given cell
        function startSlideshow(cell, imageGroup) {
            let img1 = document.createElement('img');
            let img2 = document.createElement('img');
            img1.className = img2.className = 'slide-img';
            img1.style.opacity = 1;
            img2.style.opacity = 0;
            cell.appendChild(img1);
            cell.appendChild(img2);
    
            // Function to change the image in the slideshow
            function changeImage() {
                const newImage = getRandomImage(imageGroup);
                if (img1.style.opacity === '1') {
                    img2.src = newImage;
                    img2.style.opacity = 1;
                    img1.style.opacity = 0;
                } else {
                    img1.src = newImage;
                    img1.style.opacity = 1;
                    img2.style.opacity = 0;
                }
            }
    
            setInterval(changeImage, Math.random() * 2000 + 3000); // Change the image at a random interval between 1s to 3s

            cell.addEventListener('mouseover', function() {
                img1.style.opacity = 0;
                img2.style.opacity = 0;
            });
    


        }
    
        for (let row = 1; row <= 26; row++) {
            for (let col = 1; col <= 24; col++) {
                let cellIndex = (row - 1) * 24 + col - 1; // Calculate the cell index
                let cell = document.createElement('div');
                cell.className = 'grid-item';
                
    
                if (row === 1) {
                    startSlideshow(cell, imageGroups.blue);
                } else if (row === 2) {
                    startSlideshow(cell, imageGroups.blue);
                } else if (row === 3) {
                    if (col >= 9 && col <= 16) {
                        startSlideshow(cell, imageGroups.black); 
                    } else {
                        startSlideshow(cell, imageGroups.blue); 
                    }
                }  else if (row === 4) {
                    if (col >= 7 && col <= 18) {
                        startSlideshow(cell, imageGroups.black); 
                    } else {
                        startSlideshow(cell, imageGroups.blue); 
                    }
                }   else if (row === 4) {
                    if (col >= 6 && col <= 19) {
                        startSlideshow(cell, imageGroups.black); 
                    } else {
                        startSlideshow(cell, imageGroups.blue); 
                    }
                }   else if (row === 5) {
                    if (col >= 6 && col <= 19) {
                        startSlideshow(cell, imageGroups.black); 
                    } else {
                        startSlideshow(cell, imageGroups.blue); 
                    }
                }   else if (row === 6) {
                    if ((col >= 6 && col <= 11) || (col >= 13 && col <= 19)) {
                        startSlideshow(cell, imageGroups.black);
                    } else if (col === 12) {
                        startSlideshow(cell, imageGroups.dark);
                    } else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 7) {
                    if ((col >= 5 && col <= 10) || (col >= 14 && col <= 20)) {
                        startSlideshow(cell, imageGroups.black);
                    } else if (col === 11) {
                        startSlideshow(cell, imageGroups.middle);
                    } else if (col === 12) {
                        startSlideshow(cell, imageGroups.bright);
                    } else if (col === 13) {
                        startSlideshow(cell, imageGroups.dark);
                    } else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 8) {
                    if ((col >= 5 && col <= 9) || (col >= 15 && col <= 20)) {
                        startSlideshow(cell, imageGroups.black);
                    } else if (col >= 11 && col <= 13) {
                        startSlideshow(cell, imageGroups.bright);
                    } else if (col === 10 || col === 14 ) {
                        startSlideshow(cell, imageGroups.dark);
                    } else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 9) {
                    if ((col >= 5 && col <= 8) || (col >= 16 && col <= 20)) {
                        startSlideshow(cell, imageGroups.black);
                    } else if (col === 10 ||col === 15 ) {
                        startSlideshow(cell, imageGroups.middle);
                    } else if (col >= 11 && col <= 14) {
                        startSlideshow(cell, imageGroups.bright);
                    } else if (col === 9 ) {
                        startSlideshow(cell, imageGroups.dark);
                    } else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 10) {
                    if ((col >= 5 && col <= 7) || (col >= 18 && col <= 20)) {
                        startSlideshow(cell, imageGroups.black);
                    } else if ((col >= 8 && col <= 11) || (col >= 14 && col <= 17) ) {
                        startSlideshow(cell, imageGroups.middle);
                    } else if (col === 12 || col === 13) {
                        startSlideshow(cell, imageGroups.bright);
                    }else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 11) {
                    if (col === 5 ||col === 10||col === 15||col === 20) {
                        startSlideshow(cell, imageGroups.black);
                    } else if (col === 9 ||col === 11||col === 14||col === 16) {
                        startSlideshow(cell, imageGroups.middle);
                    } else if (col === 8 ||col === 12||col === 13||col === 17) {
                        startSlideshow(cell, imageGroups.bright);
                    } else if (col === 6 ||col === 7||col === 18||col === 19) {
                        startSlideshow(cell, imageGroups.dark);
                    } else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 12) {
                    if (col === 5 ||col === 6||col === 19||col === 20) {
                        startSlideshow(cell, imageGroups.black);
                    }else if (col >= 8 && col <= 17) {
                        startSlideshow(cell, imageGroups.bright);
                    } else if (col === 7 ||col === 18) {
                        startSlideshow(cell, imageGroups.dark);
                    } else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 13) {
                    if (col === 6 ||col === 19) {
                        startSlideshow(cell, imageGroups.black);
                    }else if (col >= 8 && col <= 17) {
                        startSlideshow(cell, imageGroups.bright);
                    } else if (col === 7 ||col === 18) {
                        startSlideshow(cell, imageGroups.dark);
                    } else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 14) {
                    if (col === 7 ||col === 18) {
                        startSlideshow(cell, imageGroups.black);
                    }else if ((col >= 9 && col <= 11) || (col >= 14 && col <= 16)) {
                        startSlideshow(cell, imageGroups.bright);
                    } else if (col === 8 ||col === 12||col === 13||col === 17) {
                        startSlideshow(cell, imageGroups.middle);
                    } else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 15) {
                    if (col === 7 ||col === 18) {
                        startSlideshow(cell, imageGroups.black);
                    }else if (col === 9 ||col === 10||col === 15||col === 16) {
                        startSlideshow(cell, imageGroups.bright);
                    } else if (col === 8 ||col === 17) {
                        startSlideshow(cell, imageGroups.dark);
                    } else if (col >= 11 && col <= 14) {
                        startSlideshow(cell, imageGroups.middle);
                    } else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 16) {
                    if (col === 7 ||col === 8||col === 17||col === 18) {
                        startSlideshow(cell, imageGroups.black);
                    }else if (col >= 10 && col <= 15) {
                        startSlideshow(cell, imageGroups.bright);
                    }else if (col === 9 ||col === 16) {
                        startSlideshow(cell, imageGroups.middle);
                    } else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 17) {
                    if (col === 7 ||col === 8||col === 17||col === 18) {
                        startSlideshow(cell, imageGroups.black);
                    }else if (col >= 11 && col <= 14) {
                        startSlideshow(cell, imageGroups.bright);
                    }else if (col === 10 ||col === 15) {
                        startSlideshow(cell, imageGroups.middle);
                    } else if (col === 9 ||col === 16) {
                        startSlideshow(cell, imageGroups.dark);
                    } else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 18) {
                    if (col === 7 ||col === 8||col === 17||col === 18) {
                        startSlideshow(cell, imageGroups.black);
                    }else if (col >= 10 && col <= 15) {
                        startSlideshow(cell, imageGroups.middle);
                    }else if (col === 9 ||col === 16) {
                        startSlideshow(cell, imageGroups.dark);
                    } else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 19) {
                    if (col === 7 ||col === 8||col === 17||col === 18) {
                        startSlideshow(cell, imageGroups.black);
                    }else if ((col >= 10 && col <= 15)|| col === 6 ||col === 19) {
                        startSlideshow(cell, imageGroups.middle);
                    }else if (col === 7 ||col === 18) {
                        startSlideshow(cell, imageGroups.dark);
                    } else if (col === 8 ||col === 9||col === 16||col === 17) {
                        startSlideshow(cell, imageGroups.cloth);
                    }else {
                        startSlideshow(cell, imageGroups.blue);
                    }
                }   else if (row === 20) {
                    if ((col >= 1 && col <= 2) || (col >= 22 && col <= 24)) {
                        startSlideshow(cell, imageGroups.blue);
                    }else if ((col >= 11 && col <= 13)|| col === 3 ||col === 21) {
                        startSlideshow(cell, imageGroups.middle);
                    }else {
                        startSlideshow(cell, imageGroups.cloth);
                    }
                }   else if (row >= 21 && row <= 26) {
                    startSlideshow(cell, imageGroups.cloth);
                    
                }

                container.appendChild(cell);
            }
        }
    });
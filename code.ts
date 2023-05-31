figma.showUI(__html__, { themeColors: true, width: 800, height: 560 });

figma.ui.onmessage = msg => {

  // Console logs to calm the nerves
  console.log('data received in code.ts: ')
  console.log(msg)
  console.log(`evaluated data: `, msg)
  
  // Add chart to canvas
  figma.createNodeFromSvg(msg)
  
}
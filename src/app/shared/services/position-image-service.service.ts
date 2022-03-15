import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionImageServiceService {

  private scores = new Map<string, string>();

  constructor() { 
    this.scores.set("PETR4", "http://www.petrobras.com.br/sitepetrobras/imgs/bg/logo-social.png");
    this.scores.set("PETR3", "http://www.petrobras.com.br/sitepetrobras/imgs/bg/logo-social.png");
    this.scores.set("SANB11", "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_300/https://sunsetti.com.br/wp-content/uploads/2020/08/01-parceiros-logo-santander-300x300.png");
    this.scores.set("AZUL4", "https://www.voeazul.com.br/en/img/1466431004739-LogoAzul.png");
  }

  imageSymbol(symbol: string) {
    let image = this.scores.get(symbol);
    return image ?? "https://b.rgbimg.com/users/c/co/cobrasoft/600/meZaoA0.jpg"
  }
}

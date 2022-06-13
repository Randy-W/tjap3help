# 配置文件

> 某些必须设置的项目存放在这个文件里

在TJAP3软件目录下往往都有一个文件名为`Config.ini`，这是它的配置文件，其中包含了众多设置选项，以下介绍几种常用的设置。

> 由于TJAP3采用的文本编码均为`Shift-jis`，而它的配置文件也不例外，所以你需要准备一个顺手的文本编辑器，如果使用记事本软件打开则默认会采用`GBK`编码，会导致显示大量乱码。<br/>这里推荐轻量级的[Notepad3](https://www.rizonesoft.com/downloads/notepad3/#google_vignette)，或功能更丰富的[Visual Studio Code](https://code.visualstudio.com/)。如果用这两个软件在打开`Config.ini`时仍然乱码，选择`Shift-jis`编码即可


## 曲包路径
在Config.ini中找到`TJAPath`，可填入曲包的路径，使多个模拟器可以共用同一个曲包。默认为整个模拟器目录。

```ini{5}
; 譜面ファイルが格納されているフォルダへのパス。
; セミコロン(;)で区切ることにより複数のパスを指定できます。（例: d:\tja\;e:\tja2\）
; Pathes for TJA data.
; You can specify many pathes separated with semicolon(;). (e.g. d:\tja\;e:\tja2\)
// highlight-next-line
TJAPath=.\      ; <- 默认表示整个文件夹目录
```

:::tip 提示
也就是说，**你可以不修改这一项，随意地将曲包直接解压到TJAP3软件所在的文件夹内即可正常读取。**
:::

> **如果你发现进入模拟器不读取曲包、或编辑了曲包内的TJA但并没有刷新时，可以尝试在打开模拟器前取消键盘的大写锁定再进入。**


## 字体
> 在进行设置前，需要先将想要使用的字体安装进系统内，再进行设置。

<details>
<summary>字体怎么安装进系统啊？</summary>
双击一个字体文件将其打开，你将看到下图的窗口。

![font1](/img/config_file/font1.png)
</details>


在Config.ini中找到`FontName`，可修改为你想要的**字体的名称**。默认为微软雅黑<br/>如果你使用的是[OpenTaiko](https://github.com/0auBSQ/OpenTaiko)，那么还可以设置`BoxFontName`，为分类文件夹的描述文字**字体名称**。

```ini{3}
; フォントレンダリングに使用するフォント名
; Font name used for font rendering.
// highlight-next-line
FontName=FOT-OedKtr Std E
```

:::warning 注意
填入的是**字体的名称**，**不是字体的文件名**。<br/>如果你发现填入了字体文件名也正常生效，是因为那个字体文件名正好就是字体的名称，**是巧合**。
:::

<details>
  <summary>我怎么知道字体叫什么名称啊？</summary>
双击一个字体文件将其打开，你将看到下图的窗口。<b>请仔细观察"打印"和"安装"按钮的下方一行文字。</b>

![font1](/img/config_file/font1.png)
</details>


## 判定范围
在Config.ini中找到如下语句，一般在中间至末尾处。这些是不同判定的区间，默认的判定范围如下，十分宽松。

> 这些判定数值均为困难和魔王难度的的数字，并没有简单和普通数值可供设置。

```ini{1,4,5,6}
[HitRange]

; Perfect～Poor とみなされる範囲[ms]
// highlight-start
Perfect=36
Good=90
Poor=117
// highlight-end
```
<details>
  <summary>点击显示可供参考的判定范围数值</summary>

( Perfect、Good、Poor / 良、可、不可 )

- 正常的困难和魔王难度判定：25、75、108

- 正常的简单和普通难度：41、108、125

- NS平台站立咚角色的困难和魔王难度：25、58、108

- NS平台站立咚角色的简单和普通难度：41、125、125

- NS平台卡比角色的困难和魔王难度：75、91、108

- NS平台卡比角色的简单和普通难度：91、125、125


</details>

## 其它
不难发现，在Config.ini中很多语句以`;`开头，表示注释，只起到说明和它紧挨着的非注释的语句的作用。<br/>文件里可设置的项目很多，除了上面列举的三种常用设置以外，其余的完全可以自己探索。

如：
- 以下语句表示皮肤的文件夹名。
```ini{5}
; 使用するSkinのフォルダ名。
; 例えば System\Default\Graphics\... などの場合は、SkinPath=.\Default\ を指定します。
; Skin folder path.
; e.g. System\Default\Graphics\... -> Set SkinPath=.\Default\
// highlight-next-line
SkinPath=Yellow GV5.67\
```

- 以下语句表示判定位置的调整，详细可参考[配置 > 游戏设置 > 判定偏移](./game_setting.md#判定偏移)。
```ini{3}
; 判定タイミング調整(-99～99)[ms]
; Revision value to adjust judgment timing.
// highlight-next-line
InputAdjustTime=10
```

总之，不用担心调错设置，按照自己的想法调整即可。
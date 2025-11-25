---
{"publish":true,"created":"05/11/25, 13:11","modified":"2025-11-23T09:42:00.158+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

## Variable #definition 
Variable is a property measured in units of observation.
## Dataset #definition 
A finite sequence of observations representing the measured values of some variable $X$
$$
\displaylines{
x_{1}, x_{2}, \dots, x_{n} \\
}
$$
## Types of variables
### Discrete (quantitative)
Numerical, assumes separate values, often counts
### Continuous (quantitative)
Numerical, can take any real value within the interval
### Nominal (categorial)
Category-like values with no natural order, i.e. `Cat`, `Dog`, `Horse`
### Ordinal (categorial)
Ordered categories-like, or in other words "named-numerical", i.e. grades - `Unsatisfactory`, `Satisfactory`, `Good`, `Excellent`

---
## Describing quantitative data
When describing some quantitative data, we usually want to describe two things
- The central tendency - where is data concentrated
- The dispersion (spread) - how far do extremities reach
In probability theory, these correspond to expected value (mean) and dispersion
### Summary statistic #definition 
Some single numerical value computed from a sample. This statistic summarizes some aspect of the data, i.e. center, spread, association
### Measures of central tendencies
#### Sample mean(average) #definition 
$$
\displaylines{
\overline{x} = \frac{\sum_{i=1}^{n} x_{n}}{n} \\
}
$$
#### Sample median #definition 
$$
\displaylines{
x_{1} \leq x_{2} \leq \dots \leq x_{n} \\
\tilde{x} = \begin{cases}
x_{\frac{n+1}{2}} & n \text{ is odd} \\
\frac{x_{\frac{n}{2}} + x_{\frac{n}{2}+1}}{2} & n \text{ is even} \\
\end{cases} \\
}
$$
Summary statistic is called **robust** if small changes or few extreme observations have little influence on its value.
#### Breakdown point #definition 
The smallest fraction of the sample data that has to be replaced with an arbitrary extreme value in order to make the statistic take an arbitrary large (or small) value, i.e. the measure of how resistant statistic is to data contamination
#### Trimmed mean #definition 
$$
\displaylines{
\text{Let } \alpha \in [0, 0.5) \\
\text{The } \alpha\text{-trimmed mean is then defined as:} \\
\overline{x}_{\alpha} = \frac{\sum_{i=k+1}^{n-k} x_{i}}{n-2k} \text{ where } k = \floor{\alpha n} \\
}
$$
---
### Measures of spread (dispersion)
#### Sample variance and standard deviation #definition 
$$
\displaylines{
\text{Sample variance: } s^{2} = \frac{1}{n-1}\sum_{i=1}^{n} (x_{i}-\overline{x})^{2} \\
\text{Standard deviation: } s = \sqrt{ s^{2} } \\
}
$$
Sample variance measures the typical squared distance from the mean
Standard deviation expresses this deviation in the same units as the data.

Why not use absolute values instead of squares? The answer is - we usually prefer smooth functions over non-smooth ones.

It is important to note that standard deviation is not robust, it is easily inflated by an extreme value.
##### Why do we square derivations?
- Squaring avoids cancellations between positive and negative differences
- Squaring emphasizes data points that are further from the mean
##### Why do we divide by $n-1$ instead of $n$?
- Using $n-1$ gives us an **unbiased estimate** on the true population variance
#### Quartile and Interquartile range #definition 
Quartile is each of the four equally-sized groups that the data sample can be divided into according to the distribution of a particular variable
$Q_{1}$ denotes the split-point of the first quartile from the rest (median of the lower half of the data)
$Q_{3}$ denotes the split-point of the fourth quartile from the rest (median of the higher half of the data)
Interquartile range $IQR$ is then defined as a difference $IQR = Q_{3} - Q_{1}$
$IQR$ measures the spread of the central half of the data and is much less affected by outliers than the standard deviation.
Hence, $IQR$ is more robust than the standard deviation
#### $1.5 \ IQR$ Rule #definition 
The $1.5 \ IQR$ rule states the following:
$$
\displaylines{
\forall x \in X: x < Q_{1} - 1.5 \cdot IQR \text{ or } x > Q_{3} + 1.5 \cdot IQR \implies x \text{ is an outlier} \\
}
$$
$IQR$-based "fences" are robust - they depend on medians, not on extreme values

- For symmetric, light-tailed data, $IQR \approx 1.35s$
- For heavy-tailed or contaminated data, $IQR$ stays stable, while $s$ can explode

---
### Visualizing data
#### Histograms and box plots to visually represent the data
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}[scale=0.8]

% --- 1. Define Coordinates and Scaling ---
% x-start, y-start, x-end, y-end
\coordinate (C1) at (1, 0);
\coordinate (C2) at (3, 0);
\coordinate (C3) at (5, 0);
\coordinate (C4) at (7, 0);
\coordinate (C5) at (9, 0);

% Define bar heights (these are the frequencies)
\def\Hone{3}
\def\Htwo{5}
\def\Hthree{4}
\def\Hfour{2}
\def\Hfive{1}

% --- 2. Add Y-axis Ticks and Labels ---
\foreach \y in {1, 2, 3, 4, 5}
{
    \draw (0, \y) -- (-0.15, \y) node[left] {$\y$};
    % Optional: Add horizontal grid lines
    \draw[gray, dashed, opacity=0.5] (0, \y) -- (11, \y);
}

\pgfmathsetmacro{\BarWidth}{2} % Width of each bar

% --- 3. Draw the Bars (Rectangles) ---
\foreach \x/\h/\c in {
    0/\Hone/blue!50, 
    2/\Htwo/green!50, 
    4/\Hthree/red!50, 
    6/\Hfour/orange!50, 
    8/\Hfive/purple!50
}
{
    \fill[\c, draw=black] (\x, 0) rectangle ++(\BarWidth, \h);
}

% --- 4. Draw the Axes ---
% X-axis
\draw[->, thick] (0, 0) -- (11, 0) node[right] {Value};
% Y-axis (goes up to 6, slightly more than the max height of 5)
\draw[->, thick] (0, 0) -- (0, 6) node[above] {Frequency};

% --- 5. Add X-axis Labels (Center of the Bar) ---
\node at (0 + \BarWidth/2, -0.4) {0-2};
\node at (2 + \BarWidth/2, -0.4) {2-4};
\node at (4 + \BarWidth/2, -0.4) {4-6};
\node at (6 + \BarWidth/2, -0.4) {6-8};
\node at (8 + \BarWidth/2, -0.4) {8-10};

% --- 6. Add a Title ---
\node at (5.5, 6.5) [font=\bfseries] {Histogram};

\end{tikzpicture}
\end{document}
```
When plotting histograms, it is important to keep the number of bins balanced, as to not hide the overall pattern
Common choices for bin width (and consequently the number of bins)
- Sturges: $k = 1 + \log_{2}n$
- Scott: $h = 3.5 \ s \ n^{-1/3}$
- Freedman-Diaconis: $h = 2 \cdot IQR \ n^{-1/3}$
```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=1,
    whisker/.style={thick},
    box/.style={fill=blue!30, draw=blue!70!black, very thick}
]

% --- 1. Define the Statistical Values (Coordinates) ---
\def\Min{0.5}   % Minimum
\def\Qone{2.6}  % Q1 (First Quartile)
\def\Median{4.95} % Q2 (Median)
\def\Qthree{7.0} % Q3 (Third Quartile)
\def\Max{9.5}   % Maximum

% Define the vertical position for the plot (Y-offset)
\def\YPos{1}
% Define the height of the box
\def\BoxHeight{0.5}

% --- 2. Draw the Box (IQR) ---
% Draw the rectangle from Q1 to Q3
\draw[box] (\Qone, \YPos - \BoxHeight/2) rectangle (\Qthree, \YPos + \BoxHeight/2);

% --- 3. Draw the Median Line (inside the box) ---
\draw[thick] (\Median, \YPos - \BoxHeight/2) -- (\Median, \YPos + \BoxHeight/2) node[above, yshift=0.7mm] {Median};

% --- 4. Draw the Whiskers (from Min to Q1 and Q3 to Max) ---
% Left Whisker (Min to Q1)
\draw[whisker] (\Min, \YPos) -- (\Qone, \YPos);
\draw[whisker] (\Min, \YPos - \BoxHeight/2) -- (\Min, \YPos + \BoxHeight/2); % Cap at Min

% Right Whisker (Q3 to Max)
\draw[whisker] (\Qthree, \YPos) -- (\Max, \YPos);
\draw[whisker] (\Max, \YPos - \BoxHeight/2) -- (\Max, \YPos + \BoxHeight/2); % Cap at Max

% --- 5. Draw the X-Axis (Number Line) ---
\draw[->, thick] (0, 0.5) -- (10, 0.5) node[right] {Value};

% --- 6. Add X-Axis Ticks/Labels ---
\foreach \x in {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
{
    \draw (\x, 0.5) -- (\x, 0.4) node[below] {$\x$};
}

% --- 7. Label the 5-Number Summary Points (Optional) ---
\node[above] at (\Min, \YPos + 0.15) {$Q_1 - 1.5 \cdot IQR$};
\node[above] at (\Qone, \YPos + 0.15) {$Q_1$};
\node[above] at (\Qthree, \YPos + 0.15) {$Q_3$};
\node[above] at (\Max, \YPos + 0.15) {$Q_3 + 1.5 \cdot IQR$};

% --- 8. Add a Title ---
\node at (5, 2.2) [font=\bfseries] {Box Plot};

\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=0.8,
    whisker/.style={thick},
    boxA/.style={fill=blue!30, draw=blue!70!black, very thick},
    boxB/.style={fill=green!30, draw=green!70!black, very thick}
]

% Define the height of the box
\def\BoxHeight{0.5}

% ---------------------------------------
% --- BOX PLOT 1: DATA A ---
% ---------------------------------------
\def\YPosA{2.5} % Vertical position for Data A (higher)

% Data A Values
\def\MinA{0.5}
\def\QoneA{2.6}
\def\MedianA{4.95}
\def\QthreeA{7.0}
\def\MaxA{9.5}

% Draw Box A
\draw[boxA] (\QoneA, \YPosA - \BoxHeight/2) rectangle (\QthreeA, \YPosA + \BoxHeight/2);
% Draw Median A
\draw[thick] (\MedianA, \YPosA - \BoxHeight/2) -- (\MedianA, \YPosA + \BoxHeight/2);
% Draw Whiskers A
\draw[whisker] (\MinA, \YPosA) -- (\QoneA, \YPosA);
\draw[whisker] (\MinA, \YPosA - \BoxHeight/2) -- (\MinA, \YPosA + \BoxHeight/2); % Min Cap
\draw[whisker] (\QthreeA, \YPosA) -- (\MaxA, \YPosA);
\draw[whisker] (\MaxA, \YPosA - \BoxHeight/2) -- (\MaxA, \YPosA + \BoxHeight/2); % Max Cap
% Label Data A
\node[left] at (0, \YPosA) {\textbf{Data A}};

% ---------------------------------------
% --- BOX PLOT 2: DATA B ---
% ---------------------------------------
\def\YPosB{1} % Vertical position for Data B (lower)

% Data B Values
\def\MinB{1.5}
\def\QoneB{3.0}
\def\MedianB{5.5}
\def\QthreeB{7.5}
\def\MaxB{8.5}

% Draw Box B
\draw[boxB] (\QoneB, \YPosB - \BoxHeight/2) rectangle (\QthreeB, \YPosB + \BoxHeight/2);
% Draw Median B
\draw[thick] (\MedianB, \YPosB - \BoxHeight/2) -- (\MedianB, \YPosB + \BoxHeight/2);
% Draw Whiskers B
\draw[whisker] (\MinB, \YPosB) -- (\QoneB, \YPosB);
\draw[whisker] (\MinB, \YPosB - \BoxHeight/2) -- (\MinB, \YPosB + \BoxHeight/2); % Min Cap
\draw[whisker] (\QthreeB, \YPosB) -- (\MaxB, \YPosB);
\draw[whisker] (\MaxB, \YPosB - \BoxHeight/2) -- (\MaxB, \YPosB + \BoxHeight/2); % Max Cap
% Label Data B
\node[left] at (0, \YPosB) {\textbf{Data B}};

% ---------------------------------------
% --- X-Axis (Number Line) ---
% ---------------------------------------
\draw[->, very thick] (0.5, 0.5) -- (10, 0.5) node[right] {Value};
\foreach \x in {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
{
    \draw (\x, 0.5) -- (\x, 0.4) node[below] {$\x$};
}

% Add Title
\node at (5, 3.5) [font=\bfseries] {Comparison of Data A and Data B};

\end{tikzpicture}
\end{document}
```
#### Empirical cumulative distribution function (ECDF) #definition 
$$
\displaylines{
\hat{F}_{n}(a) = \frac{1}{n}\sum_{i=1}^{n} 1_{\Set{ x_{i} \leq a }}, \\
\text{that is, the proportion of elements less than or equal to } a \\
}
$$
##### Properties
- $\hat{F}_{n}$ is a non decreasing, right-continuous step function
- $\hat{F}_{n}(-\infty) = 0$
- $\hat{F}_{n}(\infty) = 1$
- Each ordered observation $x_{i}$ increases $\hat{F}_{n}$ by $\frac{1}{n}$
```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=1.4, % Increased scaling for better readability
    point/.style={fill=blue!70!black, circle, inner sep=1.5pt} % Restoring original point size
]

% --- 1. Define ECDF Points ---
\coordinate (P0) at (0, 0);
\coordinate (P1) at (1, 0.125);
\coordinate (P2) at (2, 0.375);
\coordinate (P3) at (3, 0.500);
\coordinate (P4) at (4, 0.625);
\coordinate (P5) at (5, 0.875);
\coordinate (P6) at (6, 1.000);

% --- 2. Draw the ECDF Step Function ---
\draw[very thick, blue]
    (P0) -- (P1 -| P0) -- (P1)
    (P1) -- (P2 -| P1) -- (P2)
    (P2) -- (P3 -| P2) -- (P3)
    (P3) -- (P4 -| P3) -- (P4)
    (P4) -- (P5 -| P4) -- (P5)
    (P5) -- (P6 -| P5) -- (P6);

% --- 3. Mark the points ---
\foreach \p in {P1, P2, P3, P4, P5, P6} {
    \node[point] at (\p) {};
}

% ----------------------------------------------------------------------
% --- 4. Draw the Axes (WITHOUT labels here) ---
% ----------------------------------------------------------------------
\draw[->, thick] (0, 0) -- (6.5, 0); % X-axis, ends at 6.5
\draw[->, thick] (0, 0) -- (0, 1.4); % Y-axis, ends at 1.4

% --- 5. Add X-axis Ticks and Labels ---
\foreach \x in {1, ..., 6}
{
    \draw (\x, 0) -- (\x, -0.05) node[below] {$\x$};
}

% --- 6. Add Y-axis Ticks and Tick Labels ---
\foreach \y in {0.0, 0.25, 0.5, 0.75, 1.0}
{
    \pgfmathsetmacro{\yLabel}{\y*1}
    \draw (0, \y) -- (-0.05, \y);
    \node[left] at (-0.15, \y) {\pgfmathprintnumber{\yLabel}};
    \draw[gray, dashed, opacity=0.3] (0, \y) -- (7, \y);
}

% ----------------------------------------------------------------------
% --- 7. Custom Axis Label Positioning (The requested change) ---
% ----------------------------------------------------------------------

% Horizontal Label: "Value (x)"
% Centered at x=3, placed below the X-axis ticks
\node[font=\bfseries, anchor=north] at (3.25, -0.45) {Value ($x$)};

% Vertical Label: "Cumulative Probability (F_n(x))"
% Centered at y=0.7, rotated 90 degrees, placed left of the Y-axis ticks
\node[font=\bfseries, rotate=90, anchor=south] at (-0.8, 0.7) {$\hat{F}_n(x)$};

% --- 8. Add a Title ---
\node at (3.5, 1.6) [font=\bfseries] {ECDF};

\end{tikzpicture}
\end{document}
```
At any point $a$, $\hat{F}_{n}(a)$ estimates the probability $\mathbb{P}(X \leq a)$
#### p-quantile from ECDF #definition 
p-quantile is the smallest value of $x$ such that $\hat{F}_{n}(x) \geq p$
- For $p = 0.5$ the quantile is the median
- For $p = 0.25$ and $p = 0.75$ the quantiles are $Q_{1}, Q_{3}$ respectively
##### Comparing two ECDFs
- A horizontal shift between two ECDFs indicates a difference in location - the dataset whose ECDF is to the right tends to have larger values
- A difference in steepness (a slope of steps) indicates a difference in spread - the steeper ECDF corresponds to a more concentrated distribution
- If one ECDF is consistently below the other, one sample tends to produce larger observations (stochastic dominance)
---
## Relationships between two variables
- Positive - both grow
- Negative - one grows, another falls
- None - no visible pattern
- Spurious - both depend on some hidden factor
To show these relations visually, we can use the Scatterplot
#### Scatterplot
- Horizontal axis shows one variable (sometimes called an explanatory variable)
- Vertical axis shows the other variable (sometimes called a response variable)
- The overall pattern reveals direction, form, and strength of the relationship
An example of a positive relationship on a scatterplot:
```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=0.9]

% --- 1. Define Point Style ---
\tikzset{
    data point/.style={
        fill=blue!70!black, % Color of the point
        circle,             % Shape of the point
        inner sep=2pt       % Size of the point
    }
}

% --- 2. Draw the Axes ---
% X-axis
\draw[->, thick] (0, 0) -- (11, 0) node[right] {};
\node[font=\bfseries, anchor=north] at (5, -0.75) {Hours Studied};
% Y-axis
\draw[->, thick] (0, 0) -- (0, 11) node[above] {};
\node[font=\bfseries, rotate=90, anchor=south] at (-1.2, 5) {Exam Score};

% --- 3. Add X-axis Ticks and Labels ---
\foreach \x in {1, 2, ..., 10}
{
    \draw (\x, 0) -- (\x, -0.15) node[below] {$\x$};
}

% --- 4. Add Y-axis Ticks and Labels ---
\foreach \y in {1, 2, ..., 10}
{
    \draw (0, \y) -- (-0.15, \y) node[left] {$\y$};
}

% --- 5. Plot the Data Points ---
% Each \node command places a data point at its (x,y) coordinate
\node[data point] at (1, 3) {};
\node[data point] at (2, 4) {};
\node[data point] at (2.5, 3.5) {};
\node[data point] at (3, 5) {};
\node[data point] at (3.5, 6) {};
\node[data point] at (4, 5.5) {};
\node[data point] at (4.5, 7) {};
\node[data point] at (5, 6.5) {};
\node[data point] at (6, 8) {};
\node[data point] at (7, 7.5) {};
\node[data point] at (8, 9) {};
\node[data point] at (9, 8.5) {};
\node[data point] at (10, 10) {};

% --- 6. Add an Optional Grid (highly recommended for scatterplots) ---
\draw[gray, dashed, opacity=0.5] (0,0) grid (10,10);

% --- 7. Add a Title ---
\node at (5.5, 11.5) [font=\bfseries] {Scatterplot};

\end{tikzpicture}
\end{document}
```

Note that scatterplots only show association, not causation(!!!)
Sometimes we wish to quantify the relationship with a single number instead.
#### Sample correlation coefficient
$$
\displaylines{
\text{Let } X = (x_{1}, \dots, x_{n}), Y = (y_{1}, \dots, y_{n}) \\
\text{Let then } X \times Y \text{ be paired data} \\
\text{Sample correlation coefficient is then defined as} \\
r = \frac{\sum_{i=1}^{n} (x_{i}-\overline{x})(y_{i}-\overline{y})}{\sqrt{ \sum_{i=1}^{n} (x_{i}-\overline{x})^{2} }\sqrt{ \sum_{i=1}^{n} (y_{i}-\overline{y})^{2} }} \\
}
$$
- The numerator measures how $x$ and $y$ move together
- The denominator rescales it so that $-1 \leq r \leq 1$
$$
\displaylines{
\begin{cases}
r \to 1 \implies \text{Strong positive trend} \\
r \to -1 \implies \text{Strong negative trend} \\
r \approx 0 \implies \text{No linear trend} \\
\end{cases} \\
}
$$
Note that non-linear trends cannot be observed using the sample correlation coefficient!
### From association to prediction
Having an observable trend, we can try to predict the value of a response variable given the value of an explanatory variable
Let us discuss linear trends and, correspondingly, linear regression.
We can make predictions using the **fitted line**
##### Fitted line #definition 
Given a linear trend, a fitted line is a line that summarizes this trend, i.e. captures it's central tendency, not the details.
The fitted line provides the prediction value $\hat{y}$ for each $x$
The difference between the actual value and the predicted one is called **residual**, $e_{i} = y_{i} - \hat{y}_{i}$
Residual measures how far the actual data points are from the fitted line
To obtain the best fitted line we use algebraic regression, so called least-squares fit, the goal of this regression is to minimize the sum of squared residuals.
$$
\displaylines{
\text{Let } S = \sum_{i=1}^{n} (y_{i}-\hat{y}_{i})^{2} \\
\\
\text{We want to find a line } \hat{y} = a + bx \\
\text{such that } \sum_{i=1}^{n} (y_{i}-\hat{y}_{i})^{2} = \sum_{i=1}^{n} (y_{i}-a-bx_{i})^{2} \text{ is minimal} \\
\\
\text{To find such a line, we will employ calculus} \\
S(a, b) \text{ reaches minimum when its gradient is zero} \\
\nabla S = \begin{pmatrix}
\frac{ \partial S }{ \partial a } \\
\frac{ \partial S }{ \partial b } \\
\end{pmatrix} = 0 \iff \begin{eqsys}
\frac{ \partial S }{ \partial a } = -2\sum_{i=1}^{n} (y_{i}-a-bx_{i}) = 0 \\
\frac{ \partial S }{ \partial b } = -2\sum_{i=1}^{n} x_{i}(y_{i}-a-bx_{i}) = 0 \\
\end{eqsys} \\
\implies \begin{eqsys}
\sum_{i=1}^{n} (y_{i}-a-bx_{i}) = 0 \\
\sum_{i=1}^{n} x_{i}(y_{i}-a-bx_{i}) = 0 \\
\end{eqsys} \implies \begin{eqsys}
na + b\sum_{i=1}^{n} x_{i} = \sum_{i=1}^{n} y_{i} \\
a\sum_{i=1}^{n} x_{i} + b\sum_{i=1}^{n} x_{i}^{2} = \sum_{i=1}^{n} x_{i}y_{i} \\
\end{eqsys} \\
\implies \begin{eqsys}
a = \overline{y} - b\overline{x} \\
(\overline{y} - b\overline{x})\sum_{i=1}^{n} x_{i} + b\sum_{i=1}^{n} x_{i}^{2} = \sum_{i=1}^{n} x_{i}y_{i} \\
\end{eqsys} \\
\implies b = \frac{\sum_{i=1}^{n} (x_{i}-\overline{x})(y_{i}-\overline{y})}{\sum_{i=1}^{n} (x_{i}-\overline{x})^{2}} \text{ and } a = \overline{y} - b\overline{x} \\
}
$$
#### Assessing the result
$$
\displaylines{
\forall i \in [1, n]: y_{i} - \overline{y} = \underbrace{ (\hat{y}_{i} - \overline{y}) }_{ \text{Explained by regression} } + \underbrace{ (y_{i}-\hat{y}_{i}) }_{ \text{Unexplained, residual} } = (\hat{y}_{i} - \overline{y}) + e_{i} \\
\\
\text{Squaring and summing gives us variance decomposition} \\
\sum_{i=1}^{n} (y_{i} - \hat{y}_{i})^{2} = \sum_{i=1}^{n} (\hat{y}_{i} - \overline{y})^{2} + \sum_{i=1}^{n} (y_{i}-\hat{y}_{i})^{2} \\
\text{known as } TSS = ESS + RSS \\
\text{The equality follows from the orthogonality of residuals and fitted values:} \\
\sum_{i=1}^{n} e_{i} = 0, \qquad \sum_{i=1}^{n} x_{i}e_{i} = 0 \\
}
$$
##### The coefficient of determination #definition 
Coefficient of determination $R^{2}$ is defined as follows
$$
\displaylines{
R^{2} = 1 - \frac{RSS}{TSS} = 1 - \frac{\sum_{i=1}^{n} (y_{i}-\hat{y}_{i})^{2}}{\sum_{i=1}^{n} (y_{i} - \overline{y})^{2}} \\
\text{Or simply } R^{2} = \frac{ESS}{TSS} \\
}
$$
- $R^{2}$ is the proportion of the total variation that is explained by the fitted line
- $0 \leq R^{2} \leq 1$
- For simple regression, $R^{2} = r^{2}$
The higher the coefficient of determination, the better predictive ability.
$r$ measures the linear association, $R^{2}$ measures how well the fitted line fits.
##### Verifying the residuals
Using a scatterplot of residuals $e_{i}$ against fitted values $\hat{y}_{i}$, we can analyze the pattern they form and verify whether a fitted line is appropriate for the data.
- If residuals are random, scattered around 0, then the line fits well
- A pattern (curve, funnel, etc.) indicates problems - nonlinearity or heteroscedasticity
If the pattern is observed, it is possible that applying a variable transformation would help, i.e. $\log y, \sqrt{ x }, etc.$
If not, a nonlinear model is probably necessary

But what if a pattern is not really a curve, funnel, etc., but a changing spread, meaning there is a relation between $\hat{y}$ and $\abs{e_{i}}$?
In this case, transformation or a weighted least-squares fit might help
If not, we can still fallback to a nonlinear model
#### Effect of outliers on least-squares fit
The least-squares fit uses squared deviations, this means that one large error ahs a huge impact on the total
- Outliers can distort both $a, b$ and the correlation $r$
- Outliers might also inflate or deflate $R^{2}$
The most important thing here is to perform a data cleanup - fixing or removing **data errors**
If the outlier is in fact an actual value and not a data error - use **robust regression** models

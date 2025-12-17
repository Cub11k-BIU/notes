---
{"publish":true,"created":"08/12/25, 13:38","modified":"2025-12-15T14:47:16.031+02:00","tags":["Academia","Assignment","Probability"],"cssclasses":""}
---

## Exercise 0.1
A researcher records the daily number of minutes 12 students spent on an online learning platform during the week. The observed data (in minutes) are:
$$
\displaylines{
x = \Set{ 18, 25, 22, 30, 27, 21, 26, 29, 24, 23, 28, 95 } \\
}
$$
### 1
$$
\displaylines{
\text{Compute the following descriptive statistics for the full dataset:} \\
\\
\text{Sample mean} \\
\overline{x} = \frac{\sum_{i=1}^{n} x_{i}}{n} = \frac{18+25+22+30+27+21+26+29+24+23+28+95}{12} = \\
= \frac{368}{12} = 30 \implies \boxed{ \overline{x} = \frac{368}{12} = 30.(6) } \\
\\
\text{Sample median} \\
\text{Sorted } x: \Set{ 18, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 95 } \\
\implies \tilde{x} = \frac{x_{6} + x_{7}}{2} = \frac{51}{2} = 25.5 \implies \boxed{ \tilde{x} = 25.5 } \\
\\
\text{Standard deviation} \\
s^{2} = \frac{1}{n-1}\sum_{i=1}^{n} (x_{i}-\overline{x})^{2} \\
\text{Calculated using python script below: } s^{2} = 422.(606) \\
\implies \boxed{ s = \sqrt{ s^{2} } = 20.557384576012108 \approx 20.557 } \\
\\
\text{First and third quartiles } Q_{1}, Q_{3} \\
Q_{2} = \tilde{x} = 25.5 \\
x_{low} = \Set{ 18, 21, 22, 23, 24, 25 } \\
x_{high} = \Set{ 26, 27, 28, 29, 30, 95 } \\
\implies \boxed{ Q_{1} = \tilde{x}_{low} = 22.5 } \\
\implies \boxed{ Q_{3} = \tilde{x}_{high} = 28.5 } \\
\\
\text{Interquartile range, IQR} \\
\boxed{ IQR = Q_{3} - Q_{1} = 28.5-22.5 = 6 } \\
}
$$
```python
import math

x = [18, 25, 22, 30, 27, 21, 26, 29, 24, 23, 28, 95]
mean = sum(x) / len(x)
median = sum(sorted(x)[5:7]) / 2
s2 = sum((xi-mean)**2 for xi in x) / (len(x) - 1)
s = math.sqrt(s2)
```
### 2
$$
\displaylines{
\text{Using 1.5-}IQR \text{ rule determine whether dataset contains any outliers} \\
\text{Show all intermediate steps, including the lower and upper cutoff values} \\
\\
Q_{1} - 1.5 \cdot IQR = 22.5 - 1.5 \cdot 6 = 22.5 - 9 = 13.5 \\
\forall x_{i} \in x: x > 13.5 \implies \text{there are no lower outliers} \\
Q_{3} + 1.5 \cdot IQR = 28.5 + 1.5 \cdot 6 = 37.5 \implies 95 \text{ is an upper outlier} \\
\implies 95 \text{ is the only outlier in } x \\
}
$$
### 3
$$
\displaylines{
\text{Recalculated descriptive statistics:} \\
x' = \Set{ 18, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 } \\
\\
\text{Sample mean} \\
\boxed{ \overline{x'} = \frac{368-95}{11} = \frac{273}{11} = 24.(81) } \\
\\
\text{Sample median} \\
\boxed{ \tilde{x'} = x'_{6} = 25 } \\
\\
\text{Standard deviation} \\
\text{Calculated using python script above, excluding 95: } s^{2} = 13.(36) \\
\boxed{ s = 3.6556307750696546 \approx 3.656 } \\
\\
\text{Quartiles } Q_{1}, Q_{3} \\
Q_{2} = \tilde{x'} = 25 \\
x'_{low} = \Set{ 18, 21, 22, 23, 24 } \\
x'_{high} = \Set{ 26, 27, 28, 29, 30 } \\
\implies \boxed{ Q_{1} = 22 } \\
\implies \boxed{ Q_{3} = 28 } \\
\\
\text{Interquartile range, IQR} \\
\boxed{ IQR = Q_{3} - Q_{1} = 28 - 22 = 6 } \\
}
$$
### 4
$$
\displaylines{
\text{Compare your results from parts (1) and (3).} \\
\text{Which statistics changed the most after removing the outlier(s)?} \\
\text{Explain which measures are robust to outliers and which are sensitive.} \\
\\
\text{Sample mean and standard deviation changed drastically} \\
\text{Meadian and quartiles } Q_{1}, Q_{3} \text{ changed slightly} \\
\text{IQR did not change} \\
\\
\text{Sample mean and standard deviation are sensitive to outliers,} \\
\text{especially standard deviation as it squares them and inflates even more} \\
\\
\text{Median, } Q_{1}, Q_{3} \text{ and } IQR \text{ are all robust to outliers as shown above} \\
\text{They rely on the "middle" of a sorted dataset, which captures the main trend well} \\
}
$$
## Exercise 0.2
A performance engineer measures the response time (in milliseconds) of a web service over 20 consecutive requests. The recorded response time are:
$$
\displaylines{
\begin{align}
x = \{ 146, 149, 153, 155, 158, 160, 162, 166, 170, 174, \\
178, 183, 187, 192, 198, 205, 214, 228, 260, 310 \} \\
\end{align} \\
}
$$
Throughout this exercise, use a fixed horizontal axis from $140 \ ms$ to $320 \ ms$ for all histograms and boxplot.
### 1
$$
\displaylines{
\text{Compute descriptive statistics:} \\
\\
\text{Minimum and maximum} \\
\boxed{ min(x) = 146 } \\
\boxed{ max(x) = 310 } \\
\\
\text{Sample median} \\
\boxed{ \tilde{x} = \frac{174+178}{2} = 176 } \\
\\
\text{Quartiles } Q_{1}, Q_{3} \\
Q_{2} = \tilde{x} = 176 \\
x_{low} = \Set{ 146, 149, 153, 155, 158, 160, 162, 166, 170, 174 } \\
x_{high} = \Set{ 178, 183, 187, 192, 198, 205, 214, 228, 260, 310 } \\
\boxed{ Q_{1} = \tilde{x}_{low} = 159 } \\
\boxed{ Q_{3} = \tilde{x}_{high} = 201.5 } \\
\\
\text{Interquartile range, IQR} \\
\boxed{ IQR = Q_{3} - Q_{1} = 201.5 - 159 = 42.5 } \\
}
$$
### 2
$$
\displaylines{
\text{Construct two histograms of the dataset on the axis 140-320 } ms \\
(a) \quad \text{Use uniform bin width 5 } ms \\
[140, 145), [145, 150), \dots, [315, 320) \\
\\
(b) \quad \text{Use uniform bin width 50 } ms \\
[140, 190), [190, 240), [240, 290), [290, 340) \\
\\
(c) \quad \text{Compare between the two histograms} \\
}
$$
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}
    % --- 1. CONFIGURATION ---
    % Define the dataset (cleaned comma-separated list)
    \def\dataset{146, 149, 153, 155, 158, 160, 162, 166, 170, 174, 178, 183, 187, 192, 198, 205, 214, 228, 260, 310}
    
    % Define Axis Boundaries and Bin Width
    \def\xmin{140}
    \def\xmax{320}
    \def\binw{5}
    
    % Define Visual Scales
    % x=0.07cm means the 180 unit range will be ~12.6cm wide
    % y=1.5cm means a count of 1 is 1.5cm high
    \tikzset{
        x=0.04cm, 
        y=1.5cm,
        bar style/.style={
            draw=black,
            fill=blue!40,
            line width=0.5pt
        }
    }

    % --- 2. CALCULATIONS & DRAWING ---
    % Initialize global max height tracker for the Y-axis
    \gdef\maxy{0}

    % Calculate number of steps: (xmax - xmin) / binw - 1
    \pgfmathparse{int((\xmax-\xmin)/\binw - 1)}
    \let\numsteps\pgfmathresult
    
    % Loop through bins
    \foreach \i in {0,...,\numsteps} {
        % Calculate bin start (\b) and end (\nextb)
        \pgfmathsetmacro{\b}{\xmin + \i*\binw}
        \pgfmathsetmacro{\nextb}{\b + \binw}
        
        % Initialize count for this bin
        \global\def\bincount{0}
        
        % Inner loop: Iterate over raw data to count frequencies
        \foreach \val in \dataset {
            % Check if val is in [b, nextb)
            % We use integer math for comparison (1=True, 0=False)
            \pgfmathparse{int(\val >= \b && \val < \nextb)}
            \ifnum\pgfmathresult=1
                \pgfmathparse{int(\bincount+1)}
                \global\let\bincount\pgfmathresult
            \fi
        }
        
        % Update Global Max Y for axis drawing later
        \pgfmathparse{\bincount > \maxy ? \bincount : \maxy}
        \global\let\maxy\pgfmathresult
        
        % Draw the bar (only if count > 0 to avoid empty lines)
        \ifnum\bincount>0
            \draw[bar style] (\b, 0) rectangle (\nextb, \bincount);
            % Optional: Add count label on top of bar
            % \node[above, font=\tiny] at (\b + 0.5*\binw, \bincount) {\bincount};
        \fi
    }

    % --- 3. AXES & LABELS ---
    % Dynamic Y-axis height (max count + 1 for headroom)
    \pgfmathsetmacro{\axisymax}{\maxy + 0.5}
    
    % Draw X-axis
    \draw[->, thick] (\xmin, 0) -- (\xmax + 10, 0) node[below=12pt, yshift=-5pt] {Response time, $ms$};
    
    % Draw Y-axis
    \draw[->, thick] (\xmin, 0) -- (\xmin, \axisymax) node[above] {Frequency};
    
    % X-axis Ticks (Step 20 for readability)
    \foreach \x in {\xmin, 160, ..., \xmax} {
        \draw (\x, 0) -- (\x, -0.1) node[below] {\small \x};
    }
    \foreach \x in {\xmin, 145, ..., \xmax} {
        \draw (\x, 0) -- (\x, -0.05);
    }
    
    % Y-axis Ticks (Integer steps up to max height)
    \foreach \y in {0, ..., \maxy} {
        \draw (\xmin-3, \y) -- (\xmin, \y) node[left] {\small \y};
        % Optional: Horizontal grid lines
        \draw[gray, thin, dashed, opacity=0.2] (\xmin, \y) -- (\xmax, \y);
    }
    
    % --- 4. Add a Title ---
	\node at (240, \maxy + 1) [font=\bfseries] {Histogram, uniform bins of width 5};

\end{tikzpicture}

\end{document}
```
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}
    % --- 1. CONFIGURATION ---
    % Define the dataset (cleaned comma-separated list)
    \def\dataset{146, 149, 153, 155, 158, 160, 162, 166, 170, 174, 178, 183, 187, 192, 198, 205, 214, 228, 260, 310}
    
    % Define Axis Boundaries and Bin Width
    \def\xmin{140}
    \def\xmax{320}
    \def\binw{50}
    
    % Define Visual Scales
    % x=0.07cm means the 180 unit range will be ~12.6cm wide
    % y=1.5cm means a count of 1 is 1.5cm high
    \tikzset{
        x=0.04cm, 
        y=0.3cm,
        bar style/.style={
            draw=black,
            fill=blue!40,
            line width=0.5pt
        }
    }

    % --- 2. CALCULATIONS & DRAWING ---
    % Initialize global max height tracker for the Y-axis
    \gdef\maxy{0}

    % Calculate number of steps: (xmax - xmin) / binw - 1
    \pgfmathparse{int((\xmax-\xmin)/\binw - 1)}
    \let\numsteps\pgfmathresult
    
    % Loop through bins
    \foreach \i in {0,...,\numsteps} {
        % Calculate bin start (\b) and end (\nextb)
        \pgfmathsetmacro{\b}{\xmin + \i*\binw}
        \pgfmathsetmacro{\nextb}{\b + \binw}
        
        % Initialize count for this bin
        \global\def\bincount{0}
        
        % Inner loop: Iterate over raw data to count frequencies
        \foreach \val in \dataset {
            % Check if val is in [b, nextb)
            % We use integer math for comparison (1=True, 0=False)
            \pgfmathparse{int(\val >= \b && \val < \nextb)}
            \ifnum\pgfmathresult=1
                \pgfmathparse{int(\bincount+1)}
                \global\let\bincount\pgfmathresult
            \fi
        }
        
        % Update Global Max Y for axis drawing later
        \pgfmathparse{\bincount > \maxy ? \bincount : \maxy}
        \global\let\maxy\pgfmathresult
        
        % Draw the bar (only if count > 0 to avoid empty lines)
        \ifnum\bincount>0
            \draw[bar style] (\b, 0) rectangle (\nextb, \bincount);
            % Optional: Add count label on top of bar
            % \node[above, font=\tiny] at (\b + 0.5*\binw, \bincount) {\bincount};
        \fi
    }

    % --- 3. AXES & LABELS ---
    % Dynamic Y-axis height (max count + 1 for headroom)
    \pgfmathsetmacro{\axisymax}{\maxy + 1}
    
    % Draw X-axis
    \draw[->, thick] (\xmin, 0) -- (\xmax + 10, 0) node[below=12pt, yshift=-5pt] {Response time, $ms$};
    
    % Draw Y-axis
    \draw[->, thick] (\xmin, 0) -- (\xmin, \axisymax) node[above] {Frequency};
    
    % X-axis Ticks (Step 20 for readability)
    \foreach \x in {\xmin, 190, ..., \xmax} {
        \draw (\x, 0) -- (\x, -0.3) node[below] {\small \x};
    }
	\draw (320, 0) -- (320, -0.3) node[below] {\small 320};
    
    % Y-axis Ticks (Integer steps up to max height)
    \foreach \y in {0, ..., \maxy} {
        \draw (\xmin-2, \y) -- (\xmin, \y) node[left] {\small \y};
        % Optional: Horizontal grid lines
        \draw[gray, thin, dashed, opacity=0.2] (\xmin, \y) -- (\xmax, \y);
    }
    
        % --- 4. Add a Title ---
	\node at (240, \maxy + 3.5) [font=\bfseries] {Histogram, uniform bins of width 50};


\end{tikzpicture}

\end{document}
```
$$
\displaylines{
\text{First histogram clearly has too small bin width} \\
\text{which leads to the trend not being visible at all, just separate values} \\
\\
\text{Second histogram is lossy(!), it loses datapoint 310} \\
\text{It doesn't include bin } [290, 340) \text{ because the X-axis is limited by 320} \\
\\
\text{Despite that, the second histogram shows a clear trend, distribution is very left-heavy} \\
}
$$
### 3
$$
\displaylines{
\text{Compute } h \text{ using Freedman-Diaconis rule.} \\
\text{Round } h \text{ to a convinient integer number of milliseconds.} \\
\\
h = 2 \cdot IQR \cdot n^{-1/3} = 2 \cdot 42.5 \cdot 20^{-1/3} = 31.3142677384 \\
\text{Let us round } h \text{ to } 35 \\
}
$$
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}
    % --- 1. CONFIGURATION ---
    % Define the dataset (cleaned comma-separated list)
    \def\dataset{146, 149, 153, 155, 158, 160, 162, 166, 170, 174, 178, 183, 187, 192, 198, 205, 214, 228, 260, 310}
    
    % Define Axis Boundaries and Bin Width
    \def\xmin{140}
    \def\xmax{320}
    \def\binw{35}
    
    % Define Visual Scales
    % x=0.07cm means the 180 unit range will be ~12.6cm wide
    % y=1.5cm means a count of 1 is 1.5cm high
    \tikzset{
        x=0.04cm, 
        y=0.3cm,
        bar style/.style={
            draw=black,
            fill=blue!40,
            line width=0.5pt
        }
    }

    % --- 2. CALCULATIONS & DRAWING ---
    % Initialize global max height tracker for the Y-axis
    \gdef\maxy{0}

    % Calculate number of steps: (xmax - xmin) / binw - 1
    \pgfmathparse{int((\xmax-\xmin)/\binw - 1)}
    \let\numsteps\pgfmathresult
    
    % Loop through bins
    \foreach \i in {0,...,\numsteps} {
        % Calculate bin start (\b) and end (\nextb)
        \pgfmathsetmacro{\b}{\xmin + \i*\binw}
        \pgfmathsetmacro{\nextb}{\b + \binw}
        
        % Initialize count for this bin
        \global\def\bincount{0}
        
        % Inner loop: Iterate over raw data to count frequencies
        \foreach \val in \dataset {
            % Check if val is in [b, nextb)
            % We use integer math for comparison (1=True, 0=False)
            \pgfmathparse{int(\val >= \b && \val < \nextb)}
            \ifnum\pgfmathresult=1
                \pgfmathparse{int(\bincount+1)}
                \global\let\bincount\pgfmathresult
            \fi
        }
        
        % Update Global Max Y for axis drawing later
        \pgfmathparse{\bincount > \maxy ? \bincount : \maxy}
        \global\let\maxy\pgfmathresult
        
        % Draw the bar (only if count > 0 to avoid empty lines)
        \ifnum\bincount>0
            \draw[bar style] (\b, 0) rectangle (\nextb, \bincount);
            % Optional: Add count label on top of bar
            % \node[above, font=\tiny] at (\b + 0.5*\binw, \bincount) {\bincount};
        \fi
    }

    % --- 3. AXES & LABELS ---
    % Dynamic Y-axis height (max count + 1 for headroom)
    \pgfmathsetmacro{\axisymax}{\maxy + 1}
    
    % Draw X-axis
    \draw[->, thick] (\xmin, 0) -- (\xmax + 10, 0) node[below=12pt, yshift=-5pt] {Response time, $ms$};
    
    % Draw Y-axis
    \draw[->, thick] (\xmin, 0) -- (\xmin, \axisymax) node[above] {Frequency};
    
    % X-axis Ticks (Step 20 for readability)
    \foreach \x in {\xmin, 175, ..., \xmax} {
        \draw (\x, 0) -- (\x, -0.3) node[below] {\small \x};
    }
	\draw (320, 0) -- (320, -0.3) node[below] {};
    
    % Y-axis Ticks (Integer steps up to max height)
    \foreach \y in {0, ..., \maxy} {
        \draw (\xmin-2, \y) -- (\xmin, \y) node[left] {\small \y};
        % Optional: Horizontal grid lines
        \draw[gray, thin, dashed, opacity=0.2] (\xmin, \y) -- (\xmax, \y);
    }
    
	% --- 4. Add a Title ---
	\node at (240, \maxy + 3.5) [font=\bfseries] {Histogram, uniform bins of width \binw};


\end{tikzpicture}

\end{document}
```
$$
\displaylines{
\text{This histogram successfully captures the full dataset} \\
\text{The third histogram also confirms the trend set by the second one,} \\
\text{a very left-heavy (right-skewed) distribution} \\
}
$$
### 4
$$
\displaylines{
\text{Using the 1.5-}IQR \text{ rule, compute the lower and upper cutoff values and identify} \\
\text{any outliers.} \\
\text{Construct a boxplot for the dataset on the axis 140-320 } ms \\
\\
Q_{1} - 1.5 \cdot IQR = 159 - 1.5 \cdot 42.5 = 95.25 \implies \text{There are no lower outliers} \\
Q_{3} + 1.5 \cdot IQR = 201.5 + 1.5 \cdot 42.5 = 265.25 \implies 310 \text{ is an upper outlier} \\
\implies 310 \text{ is the only outlier} \\
}
$$
```tikz
\usepackage{tikz}

\begin{document}

\begin{tikzpicture}[
    x=0.04cm, 
    y=1cm,
    box style/.style={draw=black, fill=orange!30, thick},
    whisker style/.style={draw=black, thick, dashed},
    median style/.style={draw=blue, very thick},
    % "mark=x" requires the plot command
    outlier style/.style={mark=x, mark options={scale=1.5, red}, only marks},
    fence style/.style={draw=red!50, dotted}, % Style for the 1.5 IQR limits
    axis style/.style={draw=black, ->, thick},
    label style/.style={font=\footnotesize, align=center}
]

    % --- STATISTICS (Q1=160, Q3=198) ---
    \def\qOne{159}
    \def\median{176}
    \def\qThree{201.5}
    \def\lowerWhisker{146}
    \def\upperWhisker{260}
    \def\lowerFence{95.25}
    \def\upperFence{265.25}
    \def\outliers{310}

    % Vertical layout
    \def\boxTop{0.4}
    \def\boxBottom{-0.4}
    \def\midLine{0}

    % --- DRAWING ---
    
    % 1. Whiskers
    \draw[whisker style] (\lowerWhisker, \midLine) -- (\qOne, \midLine);
    \draw[whisker style] (\qThree, \midLine) -- (\upperWhisker, \midLine);

    % 2. Whisker Caps
    \draw[thick] (\lowerWhisker, \boxBottom/2) -- (\lowerWhisker, \boxTop/2);
    \draw[thick] (\upperWhisker, \boxBottom/2) -- (\upperWhisker, \boxTop/2);

    % 3. The Box
    \draw[box style] (\qOne, \boxBottom) rectangle (\qThree, \boxTop);

    % 4. Median
    \draw[median style] (\median, \boxBottom) -- (\median, \boxTop);

    % 5. Outliers (FIXED)
    % We use \draw plot[style] coordinates {...}
    \foreach \out in \outliers {
        \draw[outlier style] plot coordinates {(\out, \midLine)};
    }

    % --- AXIS & LABELS ---
    \draw[axis style] (110, -1.5) -- (340, -1.5) node[below=17pt, xshift=-2pt] {Response time, $ms$};

    % Ticks
    \foreach \x in {140, 160, ..., 320} {
        \draw (\x, -1.5) -- (\x, -1.7) node[below, font=\small] {\x};
    }

    % Labels
    \foreach \val/\lab in {
	    \median/Med (\median)
    } {
        \draw[gray, dotted, thin] (\val, \midLine) -- (\val, -2.3);
        \node[label style, below, text height=1.5ex] at (\val, -2.3) {\lab};
    }
	\foreach \val/\lab in {
		\upperFence/Upper fence (\upperFence)
    } {
        \draw[fence style] (\val, \midLine) -- (\val, -2.8);
        \node[label style, red!50, below, text height=1.5ex] at (\val, -2.8) {\lab};
    }
    \foreach \val/\lab in {
        \lowerWhisker/Min (\lowerWhisker)
    } {
        \draw[gray, dotted, thin] (\val, \midLine) -- (\val, -2.8);
        \node[label style, below, text height=1.5ex] at (\val, -2.8) {\lab};
    }
	\foreach \val/\lab in {
        \qOne/$Q_1$ (\qOne),
        \qThree/$Q_3$ (\qThree),
		\upperWhisker/Whisk (\upperWhisker),
        310/Out (310)
    } {
        \draw[gray, dotted, thin] (\val, \midLine) -- (\val, -3.3);
        \node[label style, below, text height=1.5ex] at (\val, -3.3) {\lab};
    }
    
	% --- 4. Add a Title ---
	\node at (240, 1.2) [font=\bfseries] {Boxplot};


\end{tikzpicture}

\end{document}
```
$$
\displaylines{
\text{Distribution is clearly left-heavy (right-skewed)} \\
\text{Second and third histograms, in combination with the boxplot, confirm it} \\
\\
\text{Most response times lie in $[140, 175)$ as shown by the Freedman-Diaconis histogram} \\
\text{Boxplot also highlights the fact that the distribution is right-skewed, showing that} \\
\text{half of the values are in } [146, 176] \\
}
$$
## Exercise 0.3
A city studies its commuters. Each commuter uses exactly one of the following modes of transportation
- Car
- Bus
- Bicycle
These three categories are mutually exclusive and cover all commuters.
The city also records whether a commuter was delayed (event $D$).
The following information is known:
- $30\%$ of commuters drive a car.
- Among bus commuters, $55\%$ were delayed.
- Overall, $38\%$ of all commuters were delayed.
- Among commuters who were not delayed, $40\%$ used the bus.
### 1
$$
\displaylines{
\text{Find the range of } P(\text{Bicycle and not delayed}) \\
\text{Let } C, B, A \text{ be events that the commuter uses a car, bus and bicycle respectively} \\
P(C) = 0.3 \\
P(D \mid B) = 0.55 \\
P(D) = 0.38 \\
P(B \mid D^{\complement}) = 0.4 \\
P(\text{Bicycle and not delayed}) = P(A \cap D^{\complement}) \\
\\
P(C) + P(B) + P(A) = 1 \\
P(D^{\complement}) = 1 - P(D) = 0.62 & (1) \\
P(B \cap D^{\complement}) = P(B \mid D^{\complement})P(D^{\complement}) = 0.4 \cdot 0.62 = 0.248 & (2) \\
P(B \cap D^{\complement}) = P(D^{\complement} \mid B)P(B) = (1 - P(D \mid B))P(B) \\
\implies P(B) = \frac{P(B \cap D^{\complement})}{1-P(D \mid B)} = \frac{0.248}{0.45} = \frac{248}{450} = \frac{124}{225} = 0.55(1) & (3) \\
P(A) = 1 - P(B) - P(C) = 1 - \frac{124}{225} - 0.3 = \frac{67}{450} = 0.14(8) & (4) \\
P(A \cap D^{\complement}) \leq P(A) = \frac{67}{450} & (5) \\
P(D^{\complement}) = P(C \cap D^{\complement}) + P(B \cap D^{\complement}) + P(A \cap D^{\complement}) \\
\implies 0.62 = P(C \cap D^{\complement}) + 0.248 + P(A \cap D^{\complement}) \\
\implies P(A \cap D^{\complement}) = 0.372 - P(C \cap D^{\complement}) & (6) \\
P(C \cap D^{\complement}) \leq P(C) = 0.3 \\
\implies P(A \cap D^{\complement}) \geq 0.372 - 0.3 = 0.072 & (7) \\
(5) \text{ and } (7) \implies \boxed{ P(A \cap D^{\complement}) \in \left[ 0.072, 0.14(8) \right] } \\
}
$$
### 2
$$
\displaylines{
\text{From now on, let } P(D \mid C) = \frac{9}{275}P(B \mid D \cap C^{\complement}) \\
\text{Construct a probability space that satisfies all the information above,} \\
\text{using the minimal possible number of elementary outcomes, that is,} \\
\text{the sample space should be as small as possible.} \\
\\
\text{Solution:} \\
\text{There are three types of distinct commuters} \\
\text{Each of them has two subtypes - delayed and not delayed} \\
\text{In total, there must be at least 6 distinct outcomes} \\
\text{Let } \Omega = \Set{ (a, b) | \begin{array}{}
a \in \Set{ \text{Car, Bus, Bicycle} } \\
b \in \Set{ \text{Delayed, Not delayed} } \\
\end{array} } \\
\abs{\Omega} = 6 \\
}
$$
### 3
$$
\displaylines{
\text{Calculate probability of each elementary outcome in } \Omega \\
\\
\text{Solution:} \\
\text{Using events with the same meaning as in } 1 \\
P(\text{Bus, Delayed}) = P(B \cap D) = P(D \mid B)P(B) = 0.55 \cdot \frac{124}{225} = \frac{341}{1125} = 0.303(1) \\
P(\text{Bus, Not delayed}) = P(B \cap D^{\complement}) = 0.248 \\
\\
\text{Let } x = P(A \cap D), y = P(C \cap D) \\
P(D) = P(D \cap A) + P(D \cap B) + P(D \cap C) = x + y + \frac{341}{1125} = 0.38 = \frac{855}{2250} \\
\implies x + y = \frac{173}{2250} \\
P(D \mid C) = \frac{9}{275}P(B \mid D \cap C^{\complement}) \implies \frac{P(C \cap D)}{P(C)} = \frac{9}{275} \cdot \frac{P(B \cap D \cap C^{\complement})}{P(D \cap C^{\complement})} \\
\implies \frac{10y}{3} = \frac{9}{275} \cdot \frac{P(B \cap D)}{P(A \cap D) + P(B \cap D)} = \frac{9 \cdot 341}{275 \cdot 1125 \cdot \left( x + \frac{341}{1125} \right)} \\
y = \frac{173}{2250} - x \\
\implies \frac{(173-2250x)(1125x+341)}{2250} = \frac{3}{10} \cdot \frac{9 \cdot 341}{275} \\
\text{Let } t = 1125x \\
\implies (173 - 2t)(341+t) = \frac{3}{10} \cdot 90 \cdot 9 \cdot 31 = 7533 \\
\implies 58993 - 682t + 173t - 2t^{2} = 7533 \\
\implies 2t^{2} + 509t - 51460 = 0 \\
\implies t \in \Set{ -332, \frac{155}{2} } \implies x \in \Set{ -\frac{332}{1125}, \frac{31}{450} } \\
x \geq 0 \implies x = \frac{31}{450} \implies y = \frac{173-155}{2250} = \frac{3}{375} \\
\\
\begin{aeqsys}
& P(C \cap D) = \frac{3}{375} = 0.008 \\
& P(C \cap D^{\complement}) = P(C) - P(C \cap D) = 0.3 - \frac{3}{375} = 0.292 \\
& P(B \cap D) = \frac{341}{1125} = 0.303(1) \\
& P(B \cap D^{\complement}) = 0.248 \\
& P(A \cap D) = \frac{31}{450} = 0.06(8) \\
& P(A \cap D^{\complement}) = P(A) - P(A \cap D) = \frac{67}{340} - \frac{31}{450} = 0.08 \\
\end{aeqsys} \\
}
$$
### 4
$$
\displaylines{
\text{Calculate the following probabilities} \\
P(\text{Bus}) \\
P(D \mid \text{Bicycle}) \\
P(\text{Bicycle} \mid D^{\complement}) \\
\\
\text{Solution:} \\
\text{Using events with the same meaning as in 1 and 2} \\
P(\text{Bus}) = P(B) = \frac{124}{225} = 0.55(1) \\
P(D \mid \text{Bicycle}) = P(D \mid A) = \frac{P(D \cap A)}{P(A)} = \frac{\frac{31}{450}}{\frac{67}{450}} = \frac{31}{67} \approx 0.463 \\
P(\text{Bicycle} \mid D^{\complement}) = P(A \mid D^{\complement}) = \frac{P(A \cap D^{\complement})}{P(D^{\complement})} = \frac{0.08}{0.62} = \frac{4}{31} \approx 0.13 \\
}
$$
## Exercise 0.4
Independent trials resulting in a success with probability $p$ and failure with probability $1-p$ are performed. What is the probability that a total of $n$ successes occur before a total of $m$ failures? (The occurrence of these $n$ successes and $m$ failures doesn’t have to be consecutive!)
$$
\displaylines{
\text{Let } A = n \text{ total successes before } m \text{ total failures} \\
\text{Let } X = \text{number of failures before } n\text{-th success} \\
\text{Let } k \in \mathbb{N}_{0} \\
X = k \iff \text{First } n-1+k \text{ trials had } n-1 \text{ successes} \\
\implies P(X = k) = \binom{n-1+k}{n-1}p^{n}(1-p)^{k} \\
\implies P(A) = P(X < m) = P(X \leq m-1) = \boxed{ \sum_{k=0}^{m-1} \binom{n-1+k}{n-1}p^{n}(1-p)^{k} } \\
}
$$
## Exercise 0.5
Twins can be either identical or fraternal. Identical, also called monozygotic, twins form when a single fertilized egg splits into two genetically identical parts. Consequently, identical twins always have the same set of genes. Fraternal, also called dizygotic, twins develop when two eggs are fertilized and implant in the uterus. The genetic connection of fraternal twins is no more or less the same as siblings born at separate times. A Los Angeles County, California, scientist wishing to know the current fraction of twin pairs born in the county that are identical twins has assigned a county statistician to study this issue. The statistician initially requested each hospital in the county to record all twin births, indicating whether or not the resulting twins were identical. The hospitals, however, told her that to determine whether newborn twins were identical was not a simple task, as it involved the permission of the twins’ parents to perform complicated and expensive DNA studies that the hospitals could not afford. After some deliberation, the statistician just asked the hospitals for data listing all twin births along with an indication as to whether the twins were of the same sex. When such data indicated that approximately 64 percent of twin births were same-sexed, the statistician declared that approximately 28 percent of all twins were identical. How did she come to this conclusion?
$$
\displaylines{
\text{Let } I = \text{twins are identical} \\
\text{Let } S = \text{twins are of the same sex} \\
P(S) = P(S \cap I) + P(S \cap I^{\complement}) = P(I) + P(S \mid I^{\complement})P(I^{\complement}) = P(I) + \frac{1}{2}(1-P(I)) \\
\implies 0.64 = \frac{1}{2}P(I) + \frac{1}{2} \implies \frac{1}{2}P(I) = 0.64 - 0.5 = 0.14 \implies \boxed{ P(I) = 0.28 } \\
}
$$
## Exercise 0.6
Consider 3 urns. Urn $A$ contains 2 white and 4 red balls, urn $B$ contains 8 white and 4 red balls, and urn $C$ contains 1 white and 3 red balls. If 1 ball is selected from each urn, what is the probability that the ball chosen from urn $A$ was white given that exactly 2 white balls were selected?
$$
\displaylines{
\text{Let } W_{i} = \text{ball selected from urn } i \text{ is white} \\
\text{Let } T = \text{exactly two selected balls are white} \\
T = (W_{A} \cap W_{B} \cap W_{C}^{\complement}) \cup (W_{A} \cap W_{B}^{\complement} \cap W_{C}) \cup (W_{A}^{\complement} \cap W_{B} \cap W_{C}) \\
P(W_{A} \cap W_{B} \cap W_{C}^{\complement}) = \frac{2}{6} \cdot \frac{8}{12} \cdot \frac{3}{4} = \frac{1}{6} \\
P(W_{A} \cap W_{B}^{\complement} \cap W_{C}) = \frac{2}{6} \cdot \frac{4}{12} \cdot \frac{1}{4} = \frac{1}{36} \\
P(W_{A}^{\complement} \cap W_{B} \cap W_{C}) = \frac{4}{6} \cdot \frac{8}{12} \cdot \frac{1}{4} = \frac{1}{9} \\
\implies P(T) = \frac{1}{6} + \frac{1}{36} + \frac{1}{9} = \frac{11}{36} \\
\implies P(W_{A} \mid T) = \frac{P(W_{A} \cap T)}{P(T)} = \frac{P(W_{A} \cap W_{B} \cap W_{C}^{\complement}) + P(W_{A} \cap W_{B}^{\complement} \cap W_{C})}{P(T)} = \\
= \frac{\frac{7}{36}}{\frac{11}{36}} = \frac{7}{11} \\
\implies \boxed{ P(W_{A} \mid T) = \frac{7}{11} } \\
}
$$
## Exercise 0.7
An urn initially contains 5 white and 7 black balls. Each time a ball is selected, its color is noted and it is replaced in the urn along with 2 other balls of the same color. Compute the probability that
- (a) the first 2 balls selected are black and the next 2 are white;
- (b) out of the first 4 balls selected, exactly 2 are black.
$$
\displaylines{
(a) \\
\text{Let } B_{i} = i\text{-th ball selected is black} \\
\text{Let } W_{i} = i\text{-th ball selected is white} \\
\text{Clearly, order in which we are picking the balls does not matter} \\
\text{If, in total, we pick 2 black and 2 white ones:} \\
\begin{align}
& \text{At each stage we pick one out of 12, 14, 16 and 18 total balls} \\
& \text{At each stage we either pick one of 7 black, 9 black, 5 white or 7 white balls} \\
\end{align} \\
\\
\text{Let } (i_{1}, i_{2}, i_{3}, i_{4}) = \pi(1, 2, 3, 4) - \text{a permutation of indices 1, 2, 3, 4} \\
\implies P(B_{i_{1}} \cap B_{i_{2}} \cap W_{i_{3}} \cap W_{i_{4}}) = \frac{7}{12} \cdot \frac{9}{14} \cdot \frac{5}{16} \cdot \frac{7}{18} = \frac{35}{768} \approx 0.046 \\
\implies \boxed{ P(B_{1} \cap B_{2} \cap W_{3} \cap W_{4}) = \frac{35}{768} \approx 0.046 } \\
\\
(b) \\
\text{Let } A = \text{out of first 4 balls selected, exactly two are black} \\
\implies P(A) = P\left( \bigcup_{i_{1},i_{2},i_{3},i_{4}} B_{i_{1}} \cap B_{i_{2}} \cap B_{i_{3}} \cap B_{i_{4}} \right) = \sum_{i_{1},i_{2},i_{3},i_{4}} P(B_{i_{1}} \cap B_{i_{2}} \cap W_{i_{3}} \cap W_{i_{4}}) \\
\text{Note that while all distinct events are disjoint, there are repeating events, i.e.} \\
B_{1} \cap B_{2} \cap W_{3} \cap W_{4} = B_{2} \cap B_{1} \cap W_{4} \cap W_{3} \\
\implies \text{We have to choose 2 out of 4 indices for black, not just count all permutations} \\
\implies \boxed{ P(A) = \binom{4}{2} \cdot \frac{35}{768} = \frac{35}{128} = 0.2734375 } \\
}
$$
## Exercise 0.8
There are 3 coins in a box. One is a two-headed coin, another is a fair coin, and the third is a biased coin that comes up heads 75 percent of the time. When one of the 3 coins is selected at random and flipped, it shows heads. What is the probability that it was the two-headed coin?
$$
\displaylines{
\text{Let } H_{2} = \text{selected coin is two headed} \\
\text{Let } F = \text{selected coin is fair} \\
\text{Let } B = \text{selected coin is biased} \\
P(H) = P(H \cap H_{2}) + P(H \cap F) + P(H \cap B) = \\
= P(H \mid H_{2})P(H_{2}) + P(H \mid F)P(F) + P(H \mid B)P(B) = \\
= P(H_{2}) + \frac{1}{2}P(F) + \frac{3}{4}P(B) = \frac{1}{3}\left( 1+\frac{1}{2}+\frac{3}{4} \right) = \frac{3}{4} \\
P(H_{2} \mid H) = \frac{P(H_{2} \cap H)}{P(H)} = \frac{P(H \mid H_{2})P(H_{2})}{P(H)} = \frac{P(H_{2})}{P(H)} = \frac{\frac{1}{3}}{\frac{3}{4}} = \frac{4}{9} \\
\implies \boxed{ P(H_{2} \mid H) = \frac{4}{9} } \\
}
$$
